---
title: Counterparty-lib 9.61.0 released!
date: 2023-11-17T20:59:03.000Z
slug: counterparty-lib-9-61-0
status: published
author: Jeremy
excerpt: >-
  Today counterparty-lib releases version 9.61.0 which includes the following
  updates : Bumped bitcoin core version to 25.1, Adjusted
  DEFAULT_MULTISIG_DUST_SIZE (7800->1000), Fixed issue with oracle function
  returning bad values, Fixed issue with change smaller than DUST throwing error
  ...
categories:
  - News
tags: []
---

Today counterparty-lib releases version 9.61.0 which includes the following updates :

* Bumped bitcoin core version to 25.1 - \[[more info](https://github.com/CounterpartyXCP/federatednode/pull/355)]
* Adjusted DEFAULT\_MULTISIG\_DUST\_SIZE (7800->1000) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1244)]
* Fixed issue with oracle function returning bad values - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1252)]
* Fixed issue with change smaller than DUST throwing error - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1228)]
* Fixed issue with issuances and callability error - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1219)]
* Fixed issue with issuance backwards compatability - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1258)]
* Fixed issue with dividends not working on reset assets - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1257)]
* Redefined EMPTY address to mean no XCP or BTC history - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1255)]
* Fixed issue with skipping owner validation on numeric issuances - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1260)]
* Fixed issue with sweeps not transferring asset ownership if no supply issued - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1259)]
* Added `origin` field to dispensers (allows refill/close/reopen from `origin`) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1253)]
* Added support for triggering dispenses on all tx outputs - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1222)]
* Fixed issue with Asset description deleted when null - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1262)]
* Added max dispense limit of 1000 - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1264)]
* Fixed issue with being unable to lock and change asset description - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1265)]
* Added DISPENSER\_CLOSE\_DELAY to delay closing dispensers 5 blocks - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1266)]
* Added MAX\_REFILLS limit of 5 - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1267)]
* Added dynamic XCP fee on sweeps - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1274)]

All users running servers are encouraged to upgrade. Activation block on mainnet is block # 819,300

## **Upgrade Procedure:**

For those running a federated node you should run the following commands:

```
cd federatednode
git pull
fednode stop
fednode update
fednode stop
fednode rebuild bitcoin bitcoin-testnet --no-cache
fednode rebuild addrindexrs addrindexrs-testnet --no-cache
fednode rebuild counterparty counterparty-testnet --no-cache
fednode stop
sudo su
rm -rf data/addrindexrs/*
rm -rf data/counterparty/*
exit
fednode start
```

Running the above commands will upgrade your counterparty fednode to the 9.61.0 release, rebuild your addrindexrs data, and start the download of the counterparty bootstrap databases.

**[View counterparty-lib 9.61.0 Release Notes](%22https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.61.20)**
