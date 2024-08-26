import {
  CreditBalanceChanged as CreditBalanceChangedEvent,
  CreditProviderStatusChanged as CreditProviderStatusChangedEvent,
  HandleCreatedUsingCredits as HandleCreatedUsingCreditsEvent,
  HandleCreationPriceChanged as HandleCreationPriceChangedEvent,
  HandleLengthMinChanged as HandleLengthMinChangedEvent,
  ProfileCreatedUsingCredits as ProfileCreatedUsingCreditsEvent,
  ProfileCreationPriceChanged as ProfileCreationPriceChangedEvent,
  TrustStatusChanged as TrustStatusChangedEvent
} from "../generated/PermissionlessCreator/PermissionlessCreator"
import {
  CreditBalanceChanged,
  CreditProviderStatusChanged,
  HandleCreatedUsingCredits,
  HandleCreationPriceChanged,
  HandleLengthMinChanged,
  ProfileCreatedUsingCredits,
  ProfileCreationPriceChanged,
  TrustStatusChanged
} from "../generated/schema"

export function handleCreditBalanceChanged(
  event: CreditBalanceChangedEvent
): void {
  let entity = new CreditBalanceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creditAddress = event.params.creditAddress
  entity.remainingCredits = event.params.remainingCredits
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreditProviderStatusChanged(
  event: CreditProviderStatusChangedEvent
): void {
  let entity = new CreditProviderStatusChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creditProvider = event.params.creditProvider
  entity.isCreditProvider = event.params.isCreditProvider
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleCreatedUsingCredits(
  event: HandleCreatedUsingCreditsEvent
): void {
  let entity = new HandleCreatedUsingCredits(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handleId = event.params.handleId
  entity.handle = event.params.handle
  entity.creator = event.params.creator
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleCreationPriceChanged(
  event: HandleCreationPriceChangedEvent
): void {
  let entity = new HandleCreationPriceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newPrice = event.params.newPrice
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHandleLengthMinChanged(
  event: HandleLengthMinChangedEvent
): void {
  let entity = new HandleLengthMinChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMinLength = event.params.newMinLength
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileCreatedUsingCredits(
  event: ProfileCreatedUsingCreditsEvent
): void {
  let entity = new ProfileCreatedUsingCredits(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.profileId = event.params.profileId
  entity.creator = event.params.creator
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileCreationPriceChanged(
  event: ProfileCreationPriceChangedEvent
): void {
  let entity = new ProfileCreationPriceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newPrice = event.params.newPrice
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrustStatusChanged(event: TrustStatusChangedEvent): void {
  let entity = new TrustStatusChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.targetAddress = event.params.targetAddress
  entity.isUntrusted = event.params.isUntrusted
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
