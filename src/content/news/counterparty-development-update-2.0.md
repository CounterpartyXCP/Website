---
title: "Counterparty Development Update — Counterparty 2.0"
date: "2024-09-18T00:00:00Z"
slug: "counterparty-development-update-2-0"
status: "published"
author: "Counterparty Team"
excerpt: "Counterparty Core v10.4.0 has been released, marking a major milestone in the project's history with new features like UTXO support, Fair Minting Protocol, and more."
categories: ["Development"]
tags: ["Development Update", "Counterparty Core", "UTXO", "Fair Minting"]
---

As described in our August development update, this release of Counterparty Core marks a major milestone in the history of the Counterparty project that some have affectionately begun calling "Counterparty 2.0". Ten years after its launch, the Counterparty project is again making huge leaps in functionality that should make a difference not only within the Counterparty community but the Bitcoin L2 ecosystem more broadly. After months of yak shaving, the Core dev team has finally released Counterparty Core v10.4.0, the first protocol change this year, and it includes numerous features that dramatically increase the functionality of the Counterparty protocol and is eagerly awaited by the community. When the next protocol version activates — approximately one month from today — the following changes will go into effect:

## Protocol Changes

### UTXO Support (Docs)
The headline feature for this release is UTXO support for Counterparty. With this change, it will be possible to attach Counterparty assets directly to Bitcoin UTXOs so that they can be spent just like Colored Coins–based protocols (such as Ordinals and Runes). This critically will enable single-transaction atomic swaps between BTC and Counterparty assets as well as Counterparty assets and other L2 protocols. Attaching assets to UTXOs will use a new Gas System, that allows for a dynamic XCP fee for transactions to reduce the barrier to entry into Counterparty for new users.

### Fair Minting Protocol (Docs)
Fair Minting allows users to mint tokens in a truly decentralized manner. It offers multiple modes of operation, including minting with miner fees only, XCP fees distributed to the issuer, or XCP fees that are burned.

### Free Subassets (Docs)
XCP fees for issuances are principally an anti-squatting mechanism. For subassets, which are namespaced by the parent asset, there's no need to limit the number of issuances in any way.

### Subassets on Numeric Assets (Docs)
Another feature in high demand is eliminating the arbitrary restriction on creating subassets on numeric assets. This is a simple change which will hopefully enable whole new classes of assets and metaprotocols on top of Counterparty.

### Be Able to Lock Descriptions (Docs)
It is often important to be sure that all characteristics of an asset are immutable to establish the permanency of the object being traded. For this reason there is a strong demand from the community to be able to lock the description of an asset.

## Upgrading
Of course, v10.4.0 also includes numerous bugfixes and quality-of-life improvements. For the full ChangeLog, please see the official release notes on GitHub. If you run a Counterparty node, be sure to upgrade ASAP. The upgrade procedure should be extremely straightforward: the API remains backwards-compatible, and the node won't even have to perform a reparse. There are, however, two additional changes in this release which will fix long-standing bugs in the popular Dispenser functionality and require attention:

### Require Dispenser to be Source Address (Docs)
It will no longer be possible to create a dispenser on an address that you don't control. You will have to create the dispenser from the `source` address of the transaction, like all other Counterparty transactions. This closes a major security hole, and also will soon allow for the elimination of the AddrIndexRs dependency which unintentionally became a consensus-critical service last fall.

### Make Dispenses Normal Counterparty Transactions (Docs)
If you are used to triggering dispensers using vanilla Bitcoin wallets like Electrum, you will no longer be able to do so! This behavior was not part of the original Dispenser spec and it's inherently dangerous, even though it can be useful in some cases where dedicated Counterparty wallet software lacks critical features. However, if you're a wallet / application developer and you use the Core `create_send` API call to trigger dispensers, then you don't have to change anything—Counterparty Core will figure out what you're trying to do and automatically turn your BTC send into a dispenser trigger transaction.

## Roadmap
Lots more exciting changes are coming to Counterparty this year, including greater performance optimization, major UX Improvements, simplification of node deployment (including, notably, the elimination of AddrIndexRs), and all of the usual bugfixes and API/CLI tweaks. But there are also future major protocol changes in the works as well.

### Reduced Transaction Fees
Counterparty transactions use a simple and outdated scheme for embedding data in the Bitcoin transaction. Bitcoin fees are of course much higher than they were ten years ago, and the Bitcoin protocol now supports the including of a great deal more metadata in transactions — with much lower fee rates — but the Counterparty protocol hasn't yet taken advantage of any of these developments. We're expecting to be able to dramatically reduce the cost of Counterparty transactions using modern encoding methods. (Issue #1375)

### New Transaction Format
We'll also be introducing a new format for Counterparty transactions which will be much more powerful and flexible. (Issue #2197) As part of this change, we're planning on adding support for bundling multiple Counterparty transactions into a single Bitcoin transaction, to reduce costs even further. (Issue #2111) We'll also be eliminating the unnecessary ARC4 encoding originally used to obfuscate Counterparty transactions. (Issue #1814)

### Address Support
Counterparty still does not support a number of modern Bitcoin address types, most notably `p2tr` and `p2wsh`. This is a significant hindrance to Counterparty adoption and integration into the rest of the Bitcoin ecosystem.

### Decentralized Finance
Counterparty was the first blockchain protocol with a decentralized exchange, trustless and peer-to-peer gaming, prediction markets, and much more. But Counterparty still doesn't have any native support for Automated Market Makers (AMMs) or Liquidity Providers (LPs) which are critical elements in any DeFi ecosystem. The Core dev team will work to implement these features and more, bringing greater liquidity to Counterparty-based markets.