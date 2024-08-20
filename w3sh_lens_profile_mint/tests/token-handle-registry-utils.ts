import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  HandleLinked,
  HandleUnlinked,
  NonceUpdated
} from "../generated/TokenHandleRegistry/TokenHandleRegistry"

export function createHandleLinkedEvent(
  handle: ethereum.Tuple,
  token: ethereum.Tuple,
  transactionExecutor: Address,
  timestamp: BigInt
): HandleLinked {
  let handleLinkedEvent = changetype<HandleLinked>(newMockEvent())

  handleLinkedEvent.parameters = new Array()

  handleLinkedEvent.parameters.push(
    new ethereum.EventParam("handle", ethereum.Value.fromTuple(handle))
  )
  handleLinkedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromTuple(token))
  )
  handleLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  handleLinkedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return handleLinkedEvent
}

export function createHandleUnlinkedEvent(
  handle: ethereum.Tuple,
  token: ethereum.Tuple,
  transactionExecutor: Address,
  timestamp: BigInt
): HandleUnlinked {
  let handleUnlinkedEvent = changetype<HandleUnlinked>(newMockEvent())

  handleUnlinkedEvent.parameters = new Array()

  handleUnlinkedEvent.parameters.push(
    new ethereum.EventParam("handle", ethereum.Value.fromTuple(handle))
  )
  handleUnlinkedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromTuple(token))
  )
  handleUnlinkedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExecutor",
      ethereum.Value.fromAddress(transactionExecutor)
    )
  )
  handleUnlinkedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return handleUnlinkedEvent
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
