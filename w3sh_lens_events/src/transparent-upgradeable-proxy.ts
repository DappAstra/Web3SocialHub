import {
  Acted as ActedEvent,
  BaseInitialized as BaseInitializedEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  Blocked as BlockedEvent,
  CollectNFTTransferred as CollectNFTTransferredEvent,
  CommentCreated as CommentCreatedEvent,
  DelegatedExecutorsConfigApplied as DelegatedExecutorsConfigAppliedEvent,
  DelegatedExecutorsConfigChanged as DelegatedExecutorsConfigChangedEvent,
  EmergencyAdminSet as EmergencyAdminSetEvent,
  FollowModuleSet as FollowModuleSetEvent,
  FollowNFTDeployed as FollowNFTDeployedEvent,
  Followed as FollowedEvent,
  GovernanceSet as GovernanceSetEvent,
  LegacyCollectNFTDeployed as LegacyCollectNFTDeployedEvent,
  MirrorCreated as MirrorCreatedEvent,
  NonceUpdated as NonceUpdatedEvent,
  PostCreated as PostCreatedEvent,
  ProfileCreated as ProfileCreatedEvent,
  ProfileCreatorWhitelisted as ProfileCreatorWhitelistedEvent,
  ProfileMetadataSet as ProfileMetadataSetEvent,
  QuoteCreated as QuoteCreatedEvent,
  StateSet as StateSetEvent,
  TokenGuardianStateChanged as TokenGuardianStateChangedEvent,
  TreasuryFeeSet as TreasuryFeeSetEvent,
  TreasurySet as TreasurySetEvent,
  Unblocked as UnblockedEvent,
  Unfollowed as UnfollowedEvent
} from "../generated/TransparentUpgradeableProxy/TransparentUpgradeableProxy"
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
} from "../generated/schema"

export function handleActed(event: ActedEvent): void {
  let entity = new Acted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.publicationActionParams_publicationActedProfileId =
    event.params.publicationActionParams.publicationActedProfileId
  entity.publicationActionParams_publicationActedId =
    event.params.publicationActionParams.publicationActedId
  entity.publicationActionParams_actorProfileId =
    event.params.publicationActionParams.actorProfileId
  entity.publicationActionParams_referrerProfileIds =
    event.params.publicationActionParams.referrerProfileIds
  entity.publicationActionParams_referrerPubIds =
    event.params.publicationActionParams.referrerPubIds
  entity.publicationActionParams_actionModuleAddress =
    event.params.publicationActionParams.actionModuleAddress
  entity.publicationActionParams_actionModuleData =
    event.params.publicationActionParams.actionModuleData
  entity.actionModuleReturnData = event.params.actionModuleReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseInitialized(event: BaseInitializedEvent): void {
  let entity = new BaseInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchMetadataUpdate(
  event: BatchMetadataUpdateEvent
): void {
  let entity = new BatchMetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlocked(event: BlockedEvent): void {
  let entity = new Blocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.byProfileId = event.params.byProfileId
  entity.idOfProfileBlocked = event.params.idOfProfileBlocked
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectNFTTransferred(
  event: CollectNFTTransferredEvent
): void {
  let entity = new CollectNFTTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.pubId = event.params.pubId
  entity.collectNFTId = event.params.collectNFTId
  entity.from = event.params.from
  entity.to = event.params.to
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCommentCreated(event: CommentCreatedEvent): void {
  let entity = new CommentCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commentParams_profileId = event.params.commentParams.profileId
  entity.commentParams_contentURI = event.params.commentParams.contentURI
  entity.commentParams_pointedProfileId =
    event.params.commentParams.pointedProfileId
  entity.commentParams_pointedPubId = event.params.commentParams.pointedPubId
  entity.commentParams_referrerProfileIds =
    event.params.commentParams.referrerProfileIds
  entity.commentParams_referrerPubIds =
    event.params.commentParams.referrerPubIds
  entity.commentParams_referenceModuleData =
    event.params.commentParams.referenceModuleData
  //entity.commentParams_actionModules = event.params.commentParams.actionModules
  entity.commentParams_actionModulesInitDatas =
    event.params.commentParams.actionModulesInitDatas
  entity.commentParams_referenceModule =
    event.params.commentParams.referenceModule
  entity.commentParams_referenceModuleInitData =
    event.params.commentParams.referenceModuleInitData
  entity.pubId = event.params.pubId
  entity.referenceModuleReturnData = event.params.referenceModuleReturnData
  entity.actionModulesInitReturnDatas =
    event.params.actionModulesInitReturnDatas
  entity.referenceModuleInitReturnData =
    event.params.referenceModuleInitReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegatedExecutorsConfigApplied(
  event: DelegatedExecutorsConfigAppliedEvent
): void {
  let entity = new DelegatedExecutorsConfigApplied(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegatorProfileId = event.params.delegatorProfileId
  entity.configNumber = event.params.configNumber
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegatedExecutorsConfigChanged(
  event: DelegatedExecutorsConfigChangedEvent
): void {
  let entity = new DelegatedExecutorsConfigChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegatorProfileId = event.params.delegatorProfileId
  entity.configNumber = event.params.configNumber
  //entity.delegatedExecutors = event.params.delegatedExecutors
  entity.approvals = event.params.approvals
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyAdminSet(event: EmergencyAdminSetEvent): void {
  let entity = new EmergencyAdminSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.oldEmergencyAdmin = event.params.oldEmergencyAdmin
  entity.newEmergencyAdmin = event.params.newEmergencyAdmin
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollowModuleSet(event: FollowModuleSetEvent): void {
  let entity = new FollowModuleSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.followModule = event.params.followModule
  entity.followModuleInitData = event.params.followModuleInitData
  entity.followModuleReturnData = event.params.followModuleReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollowNFTDeployed(event: FollowNFTDeployedEvent): void {
  let entity = new FollowNFTDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.followNFT = event.params.followNFT
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollowed(event: FollowedEvent): void {
  let entity = new Followed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.followerProfileId = event.params.followerProfileId
  entity.idOfProfileFollowed = event.params.idOfProfileFollowed
  entity.followTokenIdAssigned = event.params.followTokenIdAssigned
  entity.followModuleData = event.params.followModuleData
  entity.processFollowModuleReturnData =
    event.params.processFollowModuleReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovernanceSet(event: GovernanceSetEvent): void {
  let entity = new GovernanceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevGovernance = event.params.prevGovernance
  entity.newGovernance = event.params.newGovernance
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLegacyCollectNFTDeployed(
  event: LegacyCollectNFTDeployedEvent
): void {
  let entity = new LegacyCollectNFTDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.pubId = event.params.pubId
  entity.collectNFT = event.params.collectNFT
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMirrorCreated(event: MirrorCreatedEvent): void {
  let entity = new MirrorCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mirrorParams_profileId = event.params.mirrorParams.profileId
  entity.mirrorParams_metadataURI = event.params.mirrorParams.metadataURI
  entity.mirrorParams_pointedProfileId =
    event.params.mirrorParams.pointedProfileId
  entity.mirrorParams_pointedPubId = event.params.mirrorParams.pointedPubId
  entity.mirrorParams_referrerProfileIds =
    event.params.mirrorParams.referrerProfileIds
  entity.mirrorParams_referrerPubIds = event.params.mirrorParams.referrerPubIds
  entity.mirrorParams_referenceModuleData =
    event.params.mirrorParams.referenceModuleData
  entity.pubId = event.params.pubId
  entity.referenceModuleReturnData = event.params.referenceModuleReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNonceUpdated(event: NonceUpdatedEvent): void {
  let entity = new NonceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.signer = event.params.signer
  entity.nonce = event.params.nonce
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postParams_profileId = event.params.postParams.profileId
  entity.postParams_contentURI = event.params.postParams.contentURI
  //entity.postParams_actionModules = event.params.postParams.actionModules
  entity.postParams_actionModulesInitDatas =
    event.params.postParams.actionModulesInitDatas
  entity.postParams_referenceModule = event.params.postParams.referenceModule
  entity.postParams_referenceModuleInitData =
    event.params.postParams.referenceModuleInitData
  entity.pubId = event.params.pubId
  entity.actionModulesInitReturnDatas =
    event.params.actionModulesInitReturnDatas
  entity.referenceModuleInitReturnData =
    event.params.referenceModuleInitReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileCreated(event: ProfileCreatedEvent): void {
  let entity = new ProfileCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.creator = event.params.creator
  entity.to = event.params.to
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileCreatorWhitelisted(
  event: ProfileCreatorWhitelistedEvent
): void {
  let entity = new ProfileCreatorWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileCreator = event.params.profileCreator
  entity.whitelisted = event.params.whitelisted
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileMetadataSet(event: ProfileMetadataSetEvent): void {
  let entity = new ProfileMetadataSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.metadata = event.params.metadata
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuoteCreated(event: QuoteCreatedEvent): void {
  let entity = new QuoteCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.quoteParams_profileId = event.params.quoteParams.profileId
  entity.quoteParams_contentURI = event.params.quoteParams.contentURI
  entity.quoteParams_pointedProfileId =
    event.params.quoteParams.pointedProfileId
  entity.quoteParams_pointedPubId = event.params.quoteParams.pointedPubId
  entity.quoteParams_referrerProfileIds =
    event.params.quoteParams.referrerProfileIds
  entity.quoteParams_referrerPubIds = event.params.quoteParams.referrerPubIds
  entity.quoteParams_referenceModuleData =
    event.params.quoteParams.referenceModuleData
  //entity.quoteParams_actionModules = event.params.quoteParams.actionModules
  entity.quoteParams_actionModulesInitDatas =
    event.params.quoteParams.actionModulesInitDatas
  entity.quoteParams_referenceModule = event.params.quoteParams.referenceModule
  entity.quoteParams_referenceModuleInitData =
    event.params.quoteParams.referenceModuleInitData
  entity.pubId = event.params.pubId
  entity.referenceModuleReturnData = event.params.referenceModuleReturnData
  entity.actionModulesInitReturnDatas =
    event.params.actionModulesInitReturnDatas
  entity.referenceModuleInitReturnData =
    event.params.referenceModuleInitReturnData
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateSet(event: StateSetEvent): void {
  let entity = new StateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevState = event.params.prevState
  entity.newState = event.params.newState
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenGuardianStateChanged(
  event: TokenGuardianStateChangedEvent
): void {
  let entity = new TokenGuardianStateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wallet = event.params.wallet
  entity.enabled = event.params.enabled
  entity.tokenGuardianDisablingTimestamp =
    event.params.tokenGuardianDisablingTimestamp
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasuryFeeSet(event: TreasuryFeeSetEvent): void {
  let entity = new TreasuryFeeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevTreasuryFee = event.params.prevTreasuryFee
  entity.newTreasuryFee = event.params.newTreasuryFee
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasurySet(event: TreasurySetEvent): void {
  let entity = new TreasurySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevTreasury = event.params.prevTreasury
  entity.newTreasury = event.params.newTreasury
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnblocked(event: UnblockedEvent): void {
  let entity = new Unblocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.byProfileId = event.params.byProfileId
  entity.idOfProfileUnblocked = event.params.idOfProfileUnblocked
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnfollowed(event: UnfollowedEvent): void {
  let entity = new Unfollowed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.unfollowerProfileId = event.params.unfollowerProfileId
  entity.idOfProfileUnfollowed = event.params.idOfProfileUnfollowed
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
