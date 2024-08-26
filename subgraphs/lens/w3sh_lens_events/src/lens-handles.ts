import {
  HandleMinted as HandleMintedEvent,
  Transfer as TransferEvent
} from "../generated/LensHandles/LensHandles"
import {
  TokenHandleRegistry
} from "../generated/TokenHandleRegistry/TokenHandleRegistry"
import {
  HandleMinted,
  Transfer
} from "../generated/schema"

export function handleHandleMinted(event: HandleMintedEvent): void {
  let entity = new HandleMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handle = event.params.handle
  entity.namespace = event.params.namespace
  entity.handleId = event.params.handleId
  entity.to = event.params.to
  entity.timestamp = event.params.timestamp

  let contract = TokenHandleRegistry.bind(event.address)
  entity.profileId = contract.resolve(event.params.handleId)

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

  let contract = TokenHandleRegistry.bind(event.address)
  entity.profileId = contract.resolve(event.params.tokenId)


  entity.save()
}