import {
  Blocked as BlockedEvent,
  CommentCreated as CommentCreatedEvent,
  Followed as FollowedEvent,
  MirrorCreated as MirrorCreatedEvent,
  PostCreated as PostCreatedEvent,
  ProfileMetadataSet as ProfileMetadataSetEvent,
  QuoteCreated as QuoteCreatedEvent,
  Unblocked as UnblockedEvent,
  Unfollowed as UnfollowedEvent
} from "../generated/TransparentUpgradeableProxy/TransparentUpgradeableProxy"
import {
  Blocked,
  CommentCreated,
  Followed,
  MirrorCreated,
  PostCreated,
  ProfileMetadataSet,
  QuoteCreated,
  Unblocked,
  Unfollowed
} from "../generated/schema"

export function handleBlocked(event: BlockedEvent): void {
  let entity = new Blocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.byProfileId = event.params.byProfileId
  entity.idOfProfileBlocked = event.params.idOfProfileBlocked
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
  entity.commentParams_pointedProfileId = event.params.commentParams.pointedProfileId
  entity.commentParams_pointedPubId = event.params.commentParams.pointedPubId
  entity.pubId = event.params.pubId
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
  entity.mirrorParams_pointedProfileId = event.params.mirrorParams.pointedProfileId
  entity.mirrorParams_pointedPubId = event.params.mirrorParams.pointedPubId
  entity.pubId = event.params.pubId
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
  entity.pubId = event.params.pubId
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
  entity.quoteParams_pointedProfileId = event.params.quoteParams.pointedProfileId
  entity.quoteParams_pointedPubId = event.params.quoteParams.pointedPubId
  entity.pubId = event.params.pubId
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
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
