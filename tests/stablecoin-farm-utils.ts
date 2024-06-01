import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  EmergencyWithdraw,
  ExitEarly,
  Locked,
  OwnershipTransferred,
  Paused,
  RenounceManagerRole,
  SetManager,
  Staked,
  Unpaused,
  Vested,
  Withdraw,
  WithdrawVesting
} from "../generated/StablecoinFarm/StablecoinFarm"

export function createEmergencyWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createExitEarlyEvent(user: Address, amount: BigInt): ExitEarly {
  let exitEarlyEvent = changetype<ExitEarly>(newMockEvent())

  exitEarlyEvent.parameters = new Array()

  exitEarlyEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  exitEarlyEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return exitEarlyEvent
}

export function createLockedEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Locked {
  let lockedEvent = changetype<Locked>(newMockEvent())

  lockedEvent.parameters = new Array()

  lockedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return lockedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRenounceManagerRoleEvent(
  account: Address
): RenounceManagerRole {
  let renounceManagerRoleEvent = changetype<RenounceManagerRole>(newMockEvent())

  renounceManagerRoleEvent.parameters = new Array()

  renounceManagerRoleEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return renounceManagerRoleEvent
}

export function createSetManagerEvent(
  account: Address,
  value: boolean
): SetManager {
  let setManagerEvent = changetype<SetManager>(newMockEvent())

  setManagerEvent.parameters = new Array()

  setManagerEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  setManagerEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBoolean(value))
  )

  return setManagerEvent
}

export function createStakedEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createVestedEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Vested {
  let vestedEvent = changetype<Vested>(newMockEvent())

  vestedEvent.parameters = new Array()

  vestedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  vestedEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  vestedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return vestedEvent
}

export function createWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}

export function createWithdrawVestingEvent(
  user: Address,
  amount: BigInt
): WithdrawVesting {
  let withdrawVestingEvent = changetype<WithdrawVesting>(newMockEvent())

  withdrawVestingEvent.parameters = new Array()

  withdrawVestingEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawVestingEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawVestingEvent
}
