# 🏗 Scaffold-ETH 2

An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. Scaffold-ETH 2 simplifies smart contract development and integrates with subgraphs to make querying blockchain data seamless.

**Features:**
- ✅ Contract Hot Reload for automatic frontend updates.
- 🪝 Custom hooks for smart contract and subgraph interactions with TypeScript support.
- 🧱 Pre-built web3 components for rapid development.
- 🔥 Burner Wallet & Local Faucet for testing.
- 🔐 Integration with wallet providers.
- 🌐 **Subgraph Integration**: Showcase of backend and frontend subgraph usage.

---

## 📋 Prerequisites

Before starting, ensure the following tools are installed:
- [Node.js (>= v18.17)](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

---

## 🚀 Quickstart

### 1. Clone the Repository and Install Dependencies
```bash
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

### 2. Start a Local Ethereum Network
```bash
yarn chain
```
This command launches a local blockchain for testing. You can configure it in `hardhat.config.ts`.

### 3. Deploy a Smart Contract
Open a second terminal and run:
```bash
yarn deploy
```
This deploys a sample contract located in `packages/hardhat/contracts/YourContract.sol`. You can modify this contract as needed.

### 4. Launch the Frontend
Open a third terminal and run:
```bash
yarn start
```
Visit your app at `http://localhost:3000` to interact with the deployed smart contract.

---

## 🧩 Subgraph Integration

Scaffold-ETH 2 is designed to showcase **subgraph integration** as a core feature. Subgraphs are GraphQL-based APIs that index blockchain data, enabling efficient queries and interactions with decentralized protocols. This project includes examples of integrating subgraphs into both backend and frontend workflows.

### Subgraphs Used
1. **Lens Subgraph**: Fetches user profiles, posts, and relationships.
2. **Mirror Subgraph**: Fetches writing editions and purchase data.

**GraphQL Endpoints**:
- Lens: `https://api.studio.thegraph.com/query/81936/w3sh_lens/version/latest`
- Mirror: `https://api.studio.thegraph.com/query/81936/w3sh_mirror_optimism/version/latest`

---

### 🛠 Backend Subgraph Integration

#### Setting Up the Subgraph
Subgraphs are managed using The Graph CLI. Here’s an overview of the setup process:
1. **Define Subgraph Manifest**:
   - Specify the blockchain network, smart contracts, and event mappings in `subgraph.yaml`.
   ```yaml
   dataSources:
     - kind: ethereum
       name: LensProtocol
       network: mainnet
       source:
         address: "0x..."
         abi: LensProtocol
       mapping:
         eventHandlers:
           - event: ProfileCreated(indexed address, string)
             handler: handleProfileCreated
   ```

2. **Write Mappings**:
   - Mappings are AssemblyScript functions that process raw blockchain data.
   ```typescript
   export function handleProfileCreated(event: ProfileCreated): void {
     let profile = new Profile(event.params.profileId.toHex());
     profile.owner = event.params.owner;
     profile.createdAt = event.block.timestamp;
     profile.save();
   }
   ```

3. **Deploy the Subgraph**:
   Use The Graph CLI to deploy the subgraph:
   ```bash
   graph deploy --studio w3sh_lens
   ```

4. **Test Queries**:
   Use The Graph Studio’s GraphQL playground to test queries.

---

### 🌐 Frontend Subgraph Integration

The frontend uses **Apollo Client** to interact with subgraphs. Data from Lens and Mirror subgraphs is dynamically fetched and displayed using React hooks.

#### Apollo Client Setup
Add the following configuration to interact with subgraphs:
```typescript
import { ApolloClient, InMemoryCache } from "@apollo/client";

const lensClient = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/81936/w3sh_lens/version/latest",
  cache: new InMemoryCache(),
});

const mirrorClient = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/81936/w3sh_mirror_optimism/version/latest",
  cache: new InMemoryCache(),
});
```

#### Example Queries
Fetch posts from the Lens subgraph:
```typescript
import { gql } from "@apollo/client";

const FETCH_POSTS = gql`
  query GetPosts($profileId: String!) {
    posts(where: { profileId: $profileId }) {
      id
      contentURI
      timestamp
    }
  }
`;
```

Fetch writing editions from the Mirror subgraph:
```typescript
const FETCH_WRITING_EDITIONS = gql`
  query GetWritingEditionPurchases($first: Int!) {
    writingEditionPurchaseds(first: $first) {
      id
      buyer
      timestamp
    }
  }
`;
```

#### Using Custom Hooks
Encapsulate GraphQL queries in reusable hooks for easier integration:
```typescript
import { useQuery } from "@apollo/client";

export const useUserPosts = (profileId: string) => {
  return useQuery(FETCH_POSTS, { variables: { profileId } });
};
```

---

### 🖥 UI Integration

The frontend showcases subgraph data using pre-built components:
- **LensPost**: Displays posts from the Lens Protocol.
- **MirrorPost**: Displays writing editions from Mirror.xyz.

Dynamic data fetching:
```typescript
const { data: userPosts, loading: loadingUserPosts } = useUserPosts("profileId");
const { data: mirrorPosts, loading: loadingMirrorPosts } = useWritingEditionPurchased(5);

if (loadingUserPosts || loadingMirrorPosts) {
  return <Spinner />;
}
```

---

## 🛡 Troubleshooting

- Ensure subgraph endpoints are reachable.
- Verify your local network (`yarn chain`) is running during development.
- Check Apollo Client configurations for correct URIs.

---

## 🤝 Contributing

We welcome contributions! Check out the [CONTRIBUTING.md](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) guide for details.

---
