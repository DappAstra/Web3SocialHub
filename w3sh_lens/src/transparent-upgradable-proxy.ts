import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  CollectNFTTransferred as CollectNFTTransferredEvent,
  LensUpgradeVersion as LensUpgradeVersionEvent,
  TokenGuardianStateChanged as TokenGuardianStateChangedEvent,
  Transfer as TransferEvent,
  TreasuryFeeSet as TreasuryFeeSetEvent,
  TreasurySet as TreasurySetEvent,
  Unfollowed as UnfollowedEvent
} from "../generated/TransparentUpgradableProxy/TransparentUpgradableProxy"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  CollectNFTTransferred,
  LensUpgradeVersion,
  TokenGuardianStateChanged,
  Transfer,
  TreasuryFeeSet,
  TreasurySet,
  Unfollowed
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

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

export function handleLensUpgradeVersion(event: LensUpgradeVersionEvent): void {
  let entity = new LensUpgradeVersion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation
  entity.version = event.params.version
  entity.gitCommit = event.params.gitCommit
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

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

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
