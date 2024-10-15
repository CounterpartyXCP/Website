---
title: "Counterparty-lib 9.60.0 released!"
excerpt: >-
  Today counterparty-lib releases version 9.60.0 which includes a number of bug fixes, updates, and new features including: Removed `callable`,`call_date`, and `call_price` from issuances – [more info] Added support for CIP24 (Oracled Dispensers) – [more info] Added support for CIP03 (Reset Token & Divisibility Statuses) – [more info] Added `tx_index` field in bindings on dispenser close
categories: ["News"]
tags: []
author: Jeremy
date: 2022-08-29T17:19:03+00:00
status: published
slug: counterparty-lib-9-60-0
---

Today counterparty-lib releases version 9.60.0 which includes a number of bug fixes, updates, and new features including:

- Removed `callable`,`call\_date`, and `call\_price` from issuances - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1209)\]
- Added support for CIP24 (Oracled Dispensers) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1167)\]
- Added support for CIP03 (Reset Token &amp; Divisibility Statuses) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1193)\]
- Added `tx\_index` field in bindings on dispenser close - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1200)\]
- Added `divisible` field to `get\_balances` API calls - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1207)\]
- Added `asset` param to `get\_asset\_info()` API calls - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1197)\]
- Added `transactions` table to `get\_{table}` API calls - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1191)\]
- Added network address validation to MPMA sends - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1164)\]
- Added segwit format check for provided pubkeys when creating a send - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1162)\]
- Update p2sh dust limit from 5640 to 546 (10x fee reduction) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1173)\]
- Update MPMA sends to adjust dust output to get to exact miners fee - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1181)\]
- Update `get\_supply()` with more efficient asset queries (thx @jotapea) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1201)\]
- Fixed issue with `get\_destructions` and invalid UTF-8 characters - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1198)\]
- Fixed issue with using 'BEGIN' keyword in API calls - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1171)\]
- Fixed issue with transfering asset ownership to segwit addresses - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1166)\]
- Fixed issue with locking subassets when parent owner is different - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1165)\]
- Fixed "filled" order status when a BTCpay expires and another is successful - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1160)\]
- Fixed issue with dispensers not working with p2sh addresses - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1155)\]
- Fixed a bunch of CircleCI automated tests (thx @windsok) - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1177)\]

Note: Activation block for CIP03 and CIP24 on mainnet is block # 753,500 All users running servers are encouraged to upgrade ASAP.

**Upgrade Procedure:**
----------------------

For those running a federated node you should run the following commands:

```
fednode update counterparty counterparty-testnet
fednode rebuild counterparty counterparty-testnet
fednode stop counterparty counterparty-testnet
sudo su
rm -f federatednode/data/counterparty/counterparty.*
exit
fednode start counterparty
```

Running the above commands will upgrade your counterparty fednode to the 9.60.0 release and start the download of the counterparty bootstrap databases. Once counterparty is back up and parsing blocks, you can start counterparty-testnet up if desired via the `fednode start counterparty-testnet` command.

```


```

[**View counterparty-lib 9.60.0 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.60.)