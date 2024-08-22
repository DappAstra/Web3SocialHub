import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { Acted } from "../generated/schema"
import { Acted as ActedEvent } from "../generated/TransparentUpgradeableProxy/TransparentUpgradeableProxy"
import { handleActed } from "../src/transparent-upgradeable-proxy"
import { createActedEvent } from "./transparent-upgradeable-proxy-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let publicationActionParams = "ethereum.Tuple Not implemented"
    let actionModuleReturnData = Bytes.fromI32(1234567890)
    let transactionExecutor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let timestamp = BigInt.fromI32(234)
    let newActedEvent = createActedEvent(
      publicationActionParams,
      actionModuleReturnData,
      transactionExecutor,
      timestamp
    )
    handleActed(newActedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Acted created and stored", () => {
    assert.entityCount("Acted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Acted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "publicationActionParams",
      "ethereum.Tuple Not implemented"
    )
    assert.fieldEquals(
      "Acted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "actionModuleReturnData",
      "1234567890"
    )
    assert.fieldEquals(
      "Acted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "transactionExecutor",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Acted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
