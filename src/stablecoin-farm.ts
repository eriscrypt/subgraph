import {
  Staked as StakedEvent,
  Withdraw as WithdrawEvent,
} from '../generated/StablecoinFarm/StablecoinFarm';
import { Staked, TotalStats, Withdraw } from '../generated/schema';
import { BigInt } from '@graphprotocol/graph-ts';

/**
 * Handle Staked event
 * @param event
 */
export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.pid = event.params.pid;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Update total stats
  let stats = TotalStats.load('totalStats');
  if (stats == null) {
    stats = new TotalStats('totalStats');
    stats.totalStaked = event.params.amount;
    stats.totalWithdraw = BigInt.fromI32(0);
  } else {
    stats.totalStaked = stats.totalStaked.plus(event.params.amount);
  }

  stats.save();
}

/**
 * Handle Withdraw event
 * @param event
 */
export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.pid = event.params.pid;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  // Update total stats
  let stats = TotalStats.load('totalStats');
  if (stats == null) {
    stats = new TotalStats('totalStats');
    stats.totalStaked = BigInt.fromI32(0);
    stats.totalWithdraw = event.params.amount;
  } else {
    stats.totalWithdraw = stats.totalWithdraw.plus(event.params.amount);
  }

  stats.save();
}
