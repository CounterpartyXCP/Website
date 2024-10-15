---
title: "Counterparty-lib 9.58.0 released!"
excerpt: >-
  This release includes 2 new major features: P2SH encoding – Allows arbitrary size messages using 2 transactions to encode data inside P2SH scriptSigs. Multi-Peer-Multi-Asset (MPMA) Sends – Allows sending multiple assets to multiple addresses with different quantities and a memo on a single message, usually used in conjunction with P2SH. Upgrade Timing Update should be
categories: ["News"]
tags: []
author: Jeremy
date: 2020-02-03T22:11:47+00:00
status: published
slug: counterparty-lib-9-58-0
---

This release includes 2 new major features:

- **P2SH encoding** - Allows arbitrary size messages using 2 transactions to encode data inside P2SH scriptSigs.
- **Multi-Peer-Multi-Asset (MPMA) Sends** - Allows sending multiple assets to multiple addresses with different quantities and a memo on a single message, usually used in conjunction with P2SH.

### Upgrade Timing

Update should be done ASAP as the rules activate on the following blocks.

```
Mainnet Block # 616,614
Testnet Block # 1,569,194
```

### Release Notes

To send an MPMA transaction, please review the "[create\_send](http://counterparty.local/docs/api/#create_send)" API documentation which has been updated to allow sending of arrays for destinations, assets, and quantities. Pay particular attention to the new **p2sh\_pretx\_txid** parameter in the "[Advanced create\_ parameters](http://counterparty.local/docs/api/#advanced-create_-parameters)" section. For information on how to encode data into a P2SH transaction, please review the "[Transaction Encoding](http://counterparty.local/docs/api/#transaction-encodings)" section as P2SH transactions differ from normal transactions and require 2 transactions instead of just one. For information on how to sign P2SH transactions, please review the "[Signing Transactions Before Broadcasting](http://counterparty.local/docs/api/#signing-transactions-before-broadcasting)" section of the [API documentation](http://counterparty.local/docs/api/)**For those running a federated node:**

```
cd federatednode/
fednode stop
git pull
sudo rm -f data/counterparty/counterparty.*
fednode update
fednode rebuild
```

[**View counterparty-lib 9.58.0 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.58.0)