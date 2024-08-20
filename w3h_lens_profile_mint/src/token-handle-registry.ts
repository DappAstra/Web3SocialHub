import {
  HandleLinked as HandleLinkedEvent,
  HandleUnlinked as HandleUnlinkedEvent,
  NonceUpdated as NonceUpdatedEvent
} from "../generated/TokenHandleRegistry/TokenHandleRegistry"
import { HandleLinked, HandleUnlinked, NonceUpdated } from "../generated/schema"

export function handleHandleLinked(event: HandleLinkedEvent): void {
  let entity = new HandleLinked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handle_id = event.params.handle.id
  entity.handle_collection = event.params.handle.collection
  entity.token_id = event.params.token.id
  entity.token_collection = event.params.token.collection
  entity.transactionExecutor = event.params.transactionExecutor
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleUnlinked(event: HandleUnlinkedEvent): void {
  let entity = new HandleUnlinked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handle_id = event.params.handle.id
  entity.handle_collection = event.params.handle.collection
  entity.token_id = event.params.token.id
  entity.token_collection = event.params.token.collection
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
