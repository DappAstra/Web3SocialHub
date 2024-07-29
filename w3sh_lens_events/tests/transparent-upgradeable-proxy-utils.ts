import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Acted,
  BaseInitialized,
  BatchMetadataUpdate,
  Blocked,
  CollectNFTTransferred,
  CommentCreated,
  DelegatedExecutorsConfigApplied,
  DelegatedExecutorsConfigChanged,
  EmergencyAdminSet,
  FollowModuleSet,
  FollowNFTDeployed,
  Followed,
  GovernanceSet,
  LegacyCollectNFTDeployed,
  MirrorCreated,
  NonceUpdated,
  PostCreated,
  ProfileCreated,
  ProfileCreatorWhitelisted,
  ProfileMetadataSet,
  QuoteCreated,
  StateSet,
  TokenGuardianStateChanged,
  TreasuryFeeSet,
  TreasurySet,
  Unblocked,
  Unfollowed
} from "../generated/TransparentUpgradeableProxy/TransparentUpgradeableProxy"

export function createActedEvent(
  publicationActionParams: ethereum.Tuple,
  actionModuleReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): Acted {
  let actedEvent = changetype<Acted>(newMockEvent())

  actedEvent.parameters = new Array()

  actedEvent.parameters.push(
    new ethereum.EventParam(
      "publicationActionParams",
      ethereum.Value.fromTuple(publicationActionParams)
    )
  )
  actedEvent.parameters.push(
    new ethereum.EventParam(
      "actionModuleReturnData",
      ethereum.Value.fromBytes(actionModuleReturnData)
    )
  )
  actedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  actedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return actedEvent
}

export function createBaseInitializedEvent(
  name: string,
  symbol: string,
  timestamp: BigInt
): BaseInitialized {
  let baseInitializedEvent = changetype<BaseInitialized>(newMockEvent())

  baseInitializedEvent.parameters = new Array()

  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return baseInitializedEvent
}

export function createBatchMetadataUpdateEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createBlockedEvent(
  byProfileId: BigInt,
  idOfProfileBlocked: BigInt,
  transactionExecutor: Address,
  timestamp: BigInt
): Blocked {
  let blockedEvent = changetype<Blocked>(newMockEvent())

  blockedEvent.parameters = new Array()

  blockedEvent.parameters.push(
    new ethereum.EventParam(
      "byProfileId",
      ethereum.Value.fromUnsignedBigInt(byProfileId)
    )
  )
  blockedEvent.parameters.push(
    new ethereum.EventParam(
      "idOfProfileBlocked",
      ethereum.Value.fromUnsignedBigInt(idOfProfileBlocked)
    )
  )
  blockedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  blockedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return blockedEvent
}

export function createCollectNFTTransferredEvent(
  profileId: BigInt,
  pubId: BigInt,
  collectNFTId: BigInt,
  from: Address,
  to: Address,
  timestamp: BigInt
): CollectNFTTransferred {
  let collectNftTransferredEvent = changetype<CollectNFTTransferred>(
    newMockEvent()
  )

  collectNftTransferredEvent.parameters = new Array()

  collectNftTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  collectNftTransferredEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  collectNftTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "collectNFTId",
      ethereum.Value.fromUnsignedBigInt(collectNFTId)
    )
  )
  collectNftTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  collectNftTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  collectNftTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return collectNftTransferredEvent
}

export function createCommentCreatedEvent(
  commentParams: ethereum.Tuple,
  pubId: BigInt,
  referenceModuleReturnData: Bytes,
  actionModulesInitReturnDatas: Array<Bytes>,
  referenceModuleInitReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): CommentCreated {
  let commentCreatedEvent = changetype<CommentCreated>(newMockEvent())

  commentCreatedEvent.parameters = new Array()

  commentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "commentParams",
      ethereum.Value.fromTuple(commentParams)
    )
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "referenceModuleReturnData",
      ethereum.Value.fromBytes(referenceModuleReturnData)
    )
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "actionModulesInitReturnDatas",
      ethereum.Value.fromBytesArray(actionModulesInitReturnDatas)
    )
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "referenceModuleInitReturnData",
      ethereum.Value.fromBytes(referenceModuleInitReturnData)
    )
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  commentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return commentCreatedEvent
}

export function createDelegatedExecutorsConfigAppliedEvent(
  delegatorProfileId: BigInt,
  configNumber: BigInt,
  timestamp: BigInt
): DelegatedExecutorsConfigApplied {
  let delegatedExecutorsConfigAppliedEvent =
    changetype<DelegatedExecutorsConfigApplied>(newMockEvent())

  delegatedExecutorsConfigAppliedEvent.parameters = new Array()

  delegatedExecutorsConfigAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "delegatorProfileId",
      ethereum.Value.fromUnsignedBigInt(delegatorProfileId)
    )
  )
  delegatedExecutorsConfigAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "configNumber",
      ethereum.Value.fromUnsignedBigInt(configNumber)
    )
  )
  delegatedExecutorsConfigAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return delegatedExecutorsConfigAppliedEvent
}

export function createDelegatedExecutorsConfigChangedEvent(
  delegatorProfileId: BigInt,
  configNumber: BigInt,
  delegatedExecutors: Array<Address>,
  approvals: Array<boolean>,
  timestamp: BigInt
): DelegatedExecutorsConfigChanged {
  let delegatedExecutorsConfigChangedEvent =
    changetype<DelegatedExecutorsConfigChanged>(newMockEvent())

  delegatedExecutorsConfigChangedEvent.parameters = new Array()

  delegatedExecutorsConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "delegatorProfileId",
      ethereum.Value.fromUnsignedBigInt(delegatorProfileId)
    )
  )
  delegatedExecutorsConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "configNumber",
      ethereum.Value.fromUnsignedBigInt(configNumber)
    )
  )
  delegatedExecutorsConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "delegatedExecutors",
      ethereum.Value.fromAddressArray(delegatedExecutors)
    )
  )
  delegatedExecutorsConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "approvals",
      ethereum.Value.fromBooleanArray(approvals)
    )
  )
  delegatedExecutorsConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return delegatedExecutorsConfigChangedEvent
}

export function createEmergencyAdminSetEvent(
  caller: Address,
  oldEmergencyAdmin: Address,
  newEmergencyAdmin: Address,
  timestamp: BigInt
): EmergencyAdminSet {
  let emergencyAdminSetEvent = changetype<EmergencyAdminSet>(newMockEvent())

  emergencyAdminSetEvent.parameters = new Array()

  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldEmergencyAdmin",
      ethereum.Value.fromAddress(oldEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "newEmergencyAdmin",
      ethereum.Value.fromAddress(newEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return emergencyAdminSetEvent
}

export function createFollowModuleSetEvent(
  profileId: BigInt,
  followModule: Address,
  followModuleInitData: Bytes,
  followModuleReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): FollowModuleSet {
  let followModuleSetEvent = changetype<FollowModuleSet>(newMockEvent())

  followModuleSetEvent.parameters = new Array()

  followModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  followModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "followModule",
      ethereum.Value.fromAddress(followModule)
    )
  )
  followModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "followModuleInitData",
      ethereum.Value.fromBytes(followModuleInitData)
    )
  )
  followModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "followModuleReturnData",
      ethereum.Value.fromBytes(followModuleReturnData)
    )
  )
  followModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  followModuleSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return followModuleSetEvent
}

export function createFollowNFTDeployedEvent(
  profileId: BigInt,
  followNFT: Address,
  timestamp: BigInt
): FollowNFTDeployed {
  let followNftDeployedEvent = changetype<FollowNFTDeployed>(newMockEvent())

  followNftDeployedEvent.parameters = new Array()

  followNftDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  followNftDeployedEvent.parameters.push(
    new ethereum.EventParam("followNFT", ethereum.Value.fromAddress(followNFT))
  )
  followNftDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return followNftDeployedEvent
}

export function createFollowedEvent(
  followerProfileId: BigInt,
  idOfProfileFollowed: BigInt,
  followTokenIdAssigned: BigInt,
  followModuleData: Bytes,
  processFollowModuleReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): Followed {
  let followedEvent = changetype<Followed>(newMockEvent())

  followedEvent.parameters = new Array()

  followedEvent.parameters.push(
    new ethereum.EventParam(
      "followerProfileId",
      ethereum.Value.fromUnsignedBigInt(followerProfileId)
    )
  )
  followedEvent.parameters.push(
    new ethereum.EventParam(
      "idOfProfileFollowed",
      ethereum.Value.fromUnsignedBigInt(idOfProfileFollowed)
    )
  )
  followedEvent.parameters.push(
    new ethereum.EventParam(
      "followTokenIdAssigned",
      ethereum.Value.fromUnsignedBigInt(followTokenIdAssigned)
    )
  )
  followedEvent.parameters.push(
    new ethereum.EventParam(
      "followModuleData",
      ethereum.Value.fromBytes(followModuleData)
    )
  )
  followedEvent.parameters.push(
    new ethereum.EventParam(
      "processFollowModuleReturnData",
      ethereum.Value.fromBytes(processFollowModuleReturnData)
    )
  )
  followedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  followedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return followedEvent
}

export function createGovernanceSetEvent(
  caller: Address,
  prevGovernance: Address,
  newGovernance: Address,
  timestamp: BigInt
): GovernanceSet {
  let governanceSetEvent = changetype<GovernanceSet>(newMockEvent())

  governanceSetEvent.parameters = new Array()

  governanceSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevGovernance",
      ethereum.Value.fromAddress(prevGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernance",
      ethereum.Value.fromAddress(newGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return governanceSetEvent
}

export function createLegacyCollectNFTDeployedEvent(
  profileId: BigInt,
  pubId: BigInt,
  collectNFT: Address,
  timestamp: BigInt
): LegacyCollectNFTDeployed {
  let legacyCollectNftDeployedEvent = changetype<LegacyCollectNFTDeployed>(
    newMockEvent()
  )

  legacyCollectNftDeployedEvent.parameters = new Array()

  legacyCollectNftDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  legacyCollectNftDeployedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  legacyCollectNftDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "collectNFT",
      ethereum.Value.fromAddress(collectNFT)
    )
  )
  legacyCollectNftDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return legacyCollectNftDeployedEvent
}

export function createMirrorCreatedEvent(
  mirrorParams: ethereum.Tuple,
  pubId: BigInt,
  referenceModuleReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): MirrorCreated {
  let mirrorCreatedEvent = changetype<MirrorCreated>(newMockEvent())

  mirrorCreatedEvent.parameters = new Array()

  mirrorCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mirrorParams",
      ethereum.Value.fromTuple(mirrorParams)
    )
  )
  mirrorCreatedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  mirrorCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "referenceModuleReturnData",
      ethereum.Value.fromBytes(referenceModuleReturnData)
    )
  )
  mirrorCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  mirrorCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return mirrorCreatedEvent
}

export function createNonceUpdatedEvent(
  signer: Address,
  nonce: BigInt,
  timestamp: BigInt
): NonceUpdated {
  let nonceUpdatedEvent = changetype<NonceUpdated>(newMockEvent())

  nonceUpdatedEvent.parameters = new Array()

  nonceUpdatedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )
  nonceUpdatedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  nonceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return nonceUpdatedEvent
}

export function createPostCreatedEvent(
  postParams: ethereum.Tuple,
  pubId: BigInt,
  actionModulesInitReturnDatas: Array<Bytes>,
  referenceModuleInitReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("postParams", ethereum.Value.fromTuple(postParams))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "actionModulesInitReturnDatas",
      ethereum.Value.fromBytesArray(actionModulesInitReturnDatas)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "referenceModuleInitReturnData",
      ethereum.Value.fromBytes(referenceModuleInitReturnData)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return postCreatedEvent
}

export function createProfileCreatedEvent(
  profileId: BigInt,
  creator: Address,
  to: Address,
  timestamp: BigInt
): ProfileCreated {
  let profileCreatedEvent = changetype<ProfileCreated>(newMockEvent())

  profileCreatedEvent.parameters = new Array()

  profileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  profileCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  profileCreatedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  profileCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return profileCreatedEvent
}

export function createProfileCreatorWhitelistedEvent(
  profileCreator: Address,
  whitelisted: boolean,
  timestamp: BigInt
): ProfileCreatorWhitelisted {
  let profileCreatorWhitelistedEvent = changetype<ProfileCreatorWhitelisted>(
    newMockEvent()
  )

  profileCreatorWhitelistedEvent.parameters = new Array()

  profileCreatorWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "profileCreator",
      ethereum.Value.fromAddress(profileCreator)
    )
  )
  profileCreatorWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelisted",
      ethereum.Value.fromBoolean(whitelisted)
    )
  )
  profileCreatorWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return profileCreatorWhitelistedEvent
}

export function createProfileMetadataSetEvent(
  profileId: BigInt,
  metadata: string,
  transactionExecutor: Address,
  timestamp: BigInt
): ProfileMetadataSet {
  let profileMetadataSetEvent = changetype<ProfileMetadataSet>(newMockEvent())

  profileMetadataSetEvent.parameters = new Array()

  profileMetadataSetEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  profileMetadataSetEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )
  profileMetadataSetEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  profileMetadataSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return profileMetadataSetEvent
}

export function createQuoteCreatedEvent(
  quoteParams: ethereum.Tuple,
  pubId: BigInt,
  referenceModuleReturnData: Bytes,
  actionModulesInitReturnDatas: Array<Bytes>,
  referenceModuleInitReturnData: Bytes,
  transactionExecutor: Address,
  timestamp: BigInt
): QuoteCreated {
  let quoteCreatedEvent = changetype<QuoteCreated>(newMockEvent())

  quoteCreatedEvent.parameters = new Array()

  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quoteParams",
      ethereum.Value.fromTuple(quoteParams)
    )
  )
  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "referenceModuleReturnData",
      ethereum.Value.fromBytes(referenceModuleReturnData)
    )
  )
  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "actionModulesInitReturnDatas",
      ethereum.Value.fromBytesArray(actionModulesInitReturnDatas)
    )
  )
  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "referenceModuleInitReturnData",
      ethereum.Value.fromBytes(referenceModuleInitReturnData)
    )
  )
  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  quoteCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return quoteCreatedEvent
}

export function createStateSetEvent(
  caller: Address,
  prevState: i32,
  newState: i32,
  timestamp: BigInt
): StateSet {
  let stateSetEvent = changetype<StateSet>(newMockEvent())

  stateSetEvent.parameters = new Array()

  stateSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "newState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stateSetEvent
}

export function createTokenGuardianStateChangedEvent(
  wallet: Address,
  enabled: boolean,
  tokenGuardianDisablingTimestamp: BigInt,
  timestamp: BigInt
): TokenGuardianStateChanged {
  let tokenGuardianStateChangedEvent = changetype<TokenGuardianStateChanged>(
    newMockEvent()
  )

  tokenGuardianStateChangedEvent.parameters = new Array()

  tokenGuardianStateChangedEvent.parameters.push(
    new ethereum.EventParam("wallet", ethereum.Value.fromAddress(wallet))
  )
  tokenGuardianStateChangedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )
  tokenGuardianStateChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenGuardianDisablingTimestamp",
      ethereum.Value.fromUnsignedBigInt(tokenGuardianDisablingTimestamp)
    )
  )
  tokenGuardianStateChangedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return tokenGuardianStateChangedEvent
}

export function createTreasuryFeeSetEvent(
  prevTreasuryFee: i32,
  newTreasuryFee: i32,
  timestamp: BigInt
): TreasuryFeeSet {
  let treasuryFeeSetEvent = changetype<TreasuryFeeSet>(newMockEvent())

  treasuryFeeSetEvent.parameters = new Array()

  treasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevTreasuryFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevTreasuryFee))
    )
  )
  treasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasuryFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newTreasuryFee))
    )
  )
  treasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return treasuryFeeSetEvent
}

export function createTreasurySetEvent(
  prevTreasury: Address,
  newTreasury: Address,
  timestamp: BigInt
): TreasurySet {
  let treasurySetEvent = changetype<TreasurySet>(newMockEvent())

  treasurySetEvent.parameters = new Array()

  treasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevTreasury",
      ethereum.Value.fromAddress(prevTreasury)
    )
  )
  treasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasury",
      ethereum.Value.fromAddress(newTreasury)
    )
  )
  treasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return treasurySetEvent
}

export function createUnblockedEvent(
  byProfileId: BigInt,
  idOfProfileUnblocked: BigInt,
  transactionExecutor: Address,
  timestamp: BigInt
): Unblocked {
  let unblockedEvent = changetype<Unblocked>(newMockEvent())

  unblockedEvent.parameters = new Array()

  unblockedEvent.parameters.push(
    new ethereum.EventParam(
      "byProfileId",
      ethereum.Value.fromUnsignedBigInt(byProfileId)
    )
  )
  unblockedEvent.parameters.push(
    new ethereum.EventParam(
      "idOfProfileUnblocked",
      ethereum.Value.fromUnsignedBigInt(idOfProfileUnblocked)
    )
  )
  unblockedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  unblockedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return unblockedEvent
}

export function createUnfollowedEvent(
  unfollowerProfileId: BigInt,
  idOfProfileUnfollowed: BigInt,
  transactionExecutor: Address,
  timestamp: BigInt
): Unfollowed {
  let unfollowedEvent = changetype<Unfollowed>(newMockEvent())

  unfollowedEvent.parameters = new Array()

  unfollowedEvent.parameters.push(
    new ethereum.EventParam(
      "unfollowerProfileId",
      ethereum.Value.fromUnsignedBigInt(unfollowerProfileId)
    )
  )
  unfollowedEvent.parameters.push(
    new ethereum.EventParam(
      "idOfProfileUnfollowed",
      ethereum.Value.fromUnsignedBigInt(idOfProfileUnfollowed)
    )
  )
  unfollowedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  unfollowedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return unfollowedEvent
}
