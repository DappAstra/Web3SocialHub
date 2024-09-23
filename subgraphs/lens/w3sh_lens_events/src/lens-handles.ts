import {
  HandleMinted as HandleMintedEvent,
  Transfer as TransferEvent
} from "../generated/LensHandles/LensHandles"
import {
  TokenHandleRegistry as TokenHandleRegistryContract
} from "../generated/TokenHandleRegistry/TokenHandleRegistry"
import {
  HandleMinted,
  Transfer
} from "../generated/schema"

import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";

const TOKEN_HANDLE_REGISTRY_ADDRESS = Address.fromString("0xD4F2F33680FCCb36748FA9831851643781608844")

export function handleHandleMinted(event: HandleMintedEvent): void {
  let entity = new HandleMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handle = event.params.handle
  entity.namespace = event.params.namespace
  entity.handleId = event.params.handleId
  entity.to = event.params.to
  entity.timestamp = event.params.timestamp

  let contract = TokenHandleRegistryContract.bind(TOKEN_HANDLE_REGISTRY_ADDRESS)
  let call_result = contract.try_resolve(event.params.handleId)
  if (call_result.reverted) {
    entity.profileId = BigInt.fromI32(0);
  }
  else {
    entity.profileId = call_result.value;
  }

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

  let contract = TokenHandleRegistryContract.bind(TOKEN_HANDLE_REGISTRY_ADDRESS)
  let call_result = contract.try_resolve(event.params.tokenId)
  if (call_result.reverted) {
    entity.profileId = BigInt.fromI32(0);
  }
  else {
    entity.profileId = call_result.value;
  }


  entity.save()
}