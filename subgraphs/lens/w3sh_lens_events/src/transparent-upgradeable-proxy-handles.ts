import {
  ProfileCreated as ProfileCreatedEvent
} from "../generated/TransparentUpgradeableProxyHandles/TransparentUpgradeableProxyHandles"
import {
  ProfileCreated
} from "../generated/schema"

export function handleProfileCreated(event: ProfileCreatedEvent): void {
  let entity = new ProfileCreated(
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