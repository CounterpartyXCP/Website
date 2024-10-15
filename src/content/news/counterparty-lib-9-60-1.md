---
title: "Counterparty-lib 9.60.1 released!"
excerpt: >-
  Today counterparty-lib releases version 9.60.1 which includes a number of bug fixes, updates, and new features including: Fixed full-parse / reparse issues – [more info] Bumped Bitcoin Core version to 24.0 – [more info] Added `validate` action to fednode to validate counterparty database integrity – [more info] Added `–no-cache` option to fednode to handle rebuilds
categories: ["News"]
tags: []
author: Jeremy
date: 2022-12-13T18:08:29+00:00
status: published
slug: counterparty-lib-9-60-1
---

Today counterparty-lib releases version 9.60.1 which includes a number of bug fixes, updates, and new features including:

- Fixed full-parse / reparse issues - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1212)\]
- Bumped Bitcoin Core version to 24.0 - \[[more info](https://github.com/CounterpartyXCP/federatednode/pull/337)\]
- Added `validate` action to fednode to validate counterparty database integrity - \[[more info](https://github.com/CounterpartyXCP/federatednode/pull/336)\]
- Added `--no-cache` option to fednode to handle rebuilds without using the cache - \[[more info](https://github.com/CounterpartyXCP/federatednode/pull/339)\] &amp; \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1213)\]
- Added `--no-bootstrap` option to fednode to prevent downloading of bootstrap database - \[[more info](https://github.com/CounterpartyXCP/federatednode/pull/342)\] &amp; \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1218)\]
- Updated `xcp-proxy` service with realtime notifications of mempool and mined Counterparty transactions - \[[more info](https://github.com/CounterpartyXCP/xcp-proxy/pull/2)\]

All users running servers are encouraged to upgrade.

**Upgrade Procedure:**
----------------------

For those running a federated node you should run the following commands:

```
cd federatednode/
git pull
cd
fednode rebuild bitcoin bitcoin-testnet
fednode update counterparty counterparty-testnet xcp-proxy xcp-proxy-testnet
fednode stop counterparty counterparty-testnet
sudo su
rm -f federatednode/data/counterparty/counterparty.db*
exit
fednode rebuild counterparty counterparty-testnet xcp-proxy xcp-proxy-testnet --no-cache
```

Running the above commands will upgrade your counterparty fednode to the 9.60.1 release and start the download of the counterparty bootstrap databases.

[**View counterparty-lib 9.60.1 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.60.1)