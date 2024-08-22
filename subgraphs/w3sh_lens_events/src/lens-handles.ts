import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  HandleMinted as HandleMintedEvent,
  TokenGuardianStateChanged as TokenGuardianStateChangedEvent,
  Transfer as TransferEvent
} from "../generated/LensHandles/LensHandles"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  HandleMinted,
  TokenGuardianStateChanged,
  Transfer
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

export function handleHandleMinted(event: HandleMintedEvent): void {
  let entity = new HandleMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handle = event.params.handle
  entity.namespace = event.params.namespace
  entity.handleId = event.params.handleId
  entity.to = event.params.to
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
