---
title: "Counterparty-lib 9.59.0 released!"
excerpt: >-
  Release Notes: Replaced indexd backend with addrindexrs Adjust minimum DEX BTC order amount to 0.00001 BTC Mempool parsing updates (temp fix for heavy mempool loads) Speed up parsing of blocks Simplified Bech32 check Fixed ParseTransactionError error handler Updated holders() to include escrowed dispenser funds Added support for subasset names in MPMA lists & dispensers Fixed
categories: ["News"]
tags: []
author: Jeremy
date: 2021-01-11T17:04:44+00:00
status: published
slug: counterparty-lib-9-59-0
---

### **Release Notes:**- Replaced indexd backend with addrindexrs
- Adjust minimum DEX BTC order amount to 0.00001 BTC
- Mempool parsing updates (temp fix for heavy mempool loads)
- Speed up parsing of blocks
- Simplified Bech32 check
- Fixed ParseTransactionError error handler
- Updated holders() to include escrowed dispenser funds
- Added support for subasset names in MPMA lists &amp; dispensers
- Fixed MPMA transaction parsing
- Added 'dispenses' table to track dispense transactions
- Added support for creating dispensers on new/empty addresses
- Rebuilt Counterparty databases and bootstrap images
- Fixed issue with wrong tx\_hash being parsed for segwit transactions
- Fixed issue with segwit dispensers not detecting payments

```
```

**For those running a federated node:**```
cd federatednode/
fednode stop
git pull
sudo rm -f data/counterparty/counterparty.*
sudo rm -rf data/indexd
fednode uninstall
fednode install full master
fednode rebuild counterparty counterparty-testnet

```

[**View counterparty-lib 9.59.0 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.59.0)