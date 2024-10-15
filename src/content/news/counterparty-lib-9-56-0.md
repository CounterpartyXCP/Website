---
title: "Counterparty-lib 9.56.0 released!"
excerpt: >-
  This release includes SegWit support on testnet (effective immediately) and on mainnet (effective from an activation block). This release also includes an update to use the latest version of Bitcoin Core 0.16.3, replaces the addrindex patch dependency with indexd, and includes additional changes and improvements listed in CIP19. Warning Update should be done with at
categories: ["News"]
tags: []
author: Jeremy
date: 2018-12-28T20:34:33+00:00
status: published
slug: counterparty-lib-9-56-0
---

This release includes SegWit support on testnet (effective immediately) and on mainnet (effective from an activation block). This release also includes an update to use the latest version of Bitcoin Core 0.16.3, replaces the addrindex patch dependency with indexd, and includes additional changes and improvements listed in [CIP19](https://github.com/CounterpartyXCP/cips/blob/master/cip-0019.md).

### Warning

Update should be done with at least a week in advance of the hard fork (activation of Segwit is around Jan 7th 2019) as indexd-server takes 2-4 days to sync initially and build all the indexing data (some community members will be providing torrents for downloading the initial synced database to speed up this process).

### Upgrade Timing

All nodes should **update before Block 557236 on mainnet**. Segwit is activated on testnet since block 1440200 so a rollback to that block is suggested after update.

**For manual installations:**
Download the newest counterparty-lib master and update required python library versions to satisfy these versions and these versions as appropriate.

**For those running a federated node with no front-end:** 
`fednode update counterparty counterparty-testnet`

**For those running a full federated node with counterwallet:** 
`fednode update`

[**View counterparty-lib 9.56.0 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.56.0)