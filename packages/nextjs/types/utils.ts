export type Tuple<T, MaxLength extends number = 10, Current extends T[] = []> = Current["length"] extends MaxLength
  ? Current
  : Current | Tuple<T, MaxLength, [T, ...Current]>;

export interface LensProfile {
  id: string;
  name: string;
  bio: string;
  picture: string;
  coverPicture: string;
  attributes: Attribute[];
}

export interface Attribute {
  type: string;
  key: string;
  value: string;
}

export interface PostEncode {
  __typename: string;
  postParams_contentURI: string;
}

export interface ILensPost {
  description: string;
  external_url: string;
  name: string;
  animation_url: string;
  $schema: string;
  lens: {
    id: string;
    appId: string;
    locale: string;
    mainContentFocus: string;
    image: {
      item: string;
      type: string;
    };
    title: string;
    content: string;
    attachments: Array<{
      item: string;
      type: string;
      cover: string;
    }>;
  };
}

export interface IMirrorPost {
  authorship: {
    algorithm: {
      name: string;
      hash: string;
    };
    contributor: string;
    signature: string;
    signingKey: string;
    signingMessageKey: string;
    signingMessageSignature: string;
  };
  content: {
    body: string;
    timestamp: string;
    title: string;
  };
  digest: string;
  version: string;
  wnft: {
    chainId: number;
    description: string;
    fundingRecipient: string;
    hasCustomWnftMedia: boolean;
    imageURI: string;
    mediaAssetId: number;
    name: string;
    nonce: number;
    owner: string;
    price: number;
    proxyAddress: string;
    renderer: string;
    supply: number;
    symbol: string;
  };
}

export interface Follower {
  followerProfileId: string;
}
