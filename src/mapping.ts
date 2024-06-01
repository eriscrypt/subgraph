import { Staked as StakedEvent, Withdraw as WithdrawEvent } from '../generated/StablecoinFarm/StablecoinFarm';
import { Staked, TotalStats, Withdraw } from '../generated/schema';
import { BigInt } from '@graphprotocol/graph-ts';
import { EventType } from './types';

function handleUpdateTotalStats(amount: BigInt, eventType: EventType): void {
  let stats = TotalStats.load('totalStats');
  if (stats == null) {
    stats = new TotalStats('totalStats');
    stats.totalStaked = BigInt.fromI32(0);
    stats.totalWithdraw = BigInt.fromI32(0);
  }

  if (eventType === EventType.STAKED) {
    stats.totalStaked = stats.totalStaked.plus(amount);
  } else {
    stats.totalWithdraw = stats.totalWithdraw.plus(amount);
  }

  stats.save();
}

/**
 * Handle Staked event
 * @param event
 */
export function handleStaked(event: StakedEvent): void {
  const entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );

  entity.pid = event.params.pid;
  entity.user = event.params.user;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  handleUpdateTotalStats(event.params.amount, EventType.STAKED);
}

/**
 * Handle Withdraw event
 * @param event
 */
export function handleWithdraw(event: WithdrawEvent): void {
  const entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );

  entity.pid = event.params.pid;
  entity.user = event.params.user;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  handleUpdateTotalStats(event.params.amount, EventType.WITHDRAW);
}
