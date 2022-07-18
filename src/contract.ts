import {
  NewAuctionWinner as NewAuctionWinnerEvent,
  NewBid as NewBidEvent,
  NewGoldenTicketWinner as NewGoldenTicketWinnerEvent,
  NewRaffleWinner as NewRaffleWinnerEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  NewAuctionWinner,
  NewBid,
  NewGoldenTicketWinner,
  NewRaffleWinner,
  OwnershipTransferred
} from "../generated/schema"

export function handleNewAuctionWinner(event: NewAuctionWinnerEvent): void {
  let entity = new NewAuctionWinner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidderID = event.params.bidderID
  entity.block = event.block.number
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleNewBid(event: NewBidEvent): void {
  let entity = new NewBid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidder = event.params.bidder
  entity.bidderID = event.params.bidderID
  entity.bidAmount = event.params.bidAmount
  entity.block = event.block.number
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleNewGoldenTicketWinner(
  event: NewGoldenTicketWinnerEvent
): void {
  let entity = new NewGoldenTicketWinner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidderID = event.params.bidderID
  entity.block = event.block.number
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleNewRaffleWinner(event: NewRaffleWinnerEvent): void {
  let entity = new NewRaffleWinner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidderID = event.params.bidderID
  entity.block = event.block.number
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.block = event.block.number
  entity.timestamp = event.block.timestamp
  entity.save()
}
