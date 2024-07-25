import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/TransparentUpgradableProxy/TransparentUpgradableProxy"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
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

export function createLensUpgradeVersionEvent(
  implementation: Address,
  version: string,
  gitCommit: Bytes,
  timestamp: BigInt
): LensUpgradeVersion {
  let lensUpgradeVersionEvent = changetype<LensUpgradeVersion>(newMockEvent())

  lensUpgradeVersionEvent.parameters = new Array()

  lensUpgradeVersionEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )
  lensUpgradeVersionEvent.parameters.push(
    new ethereum.EventParam("version", ethereum.Value.fromString(version))
  )
  lensUpgradeVersionEvent.parameters.push(
    new ethereum.EventParam(
      "gitCommit",
      ethereum.Value.fromFixedBytes(gitCommit)
    )
  )
  lensUpgradeVersionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return lensUpgradeVersionEvent
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

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
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
