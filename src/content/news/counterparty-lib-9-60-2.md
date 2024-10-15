---
title: "Counterparty-lib 9.60.2 released!"
excerpt: >-
  Today counterparty-lib releases version 9.60.2 which includes a the following updates : Fix to send change smaller than DUST to miners fee instead of error, Mempool optimizations, All users running servers are encouraged to upgrade.
categories: ["News"]
tags: []
author: Jeremy
date: 2023-05-16T23:38:33+00:00
status: published
slug: counterparty-lib-9-60-2
---

Today counterparty-lib releases version 9.60.2 which includes a the following updates :

- Fix to send change smaller than DUST to miners fee instead of error - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1228)\]
- Mempool optimizations - \[[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1233)\]

All users running servers are encouraged to upgrade.

**Upgrade Procedure:**
----------------------

For those running a federated node you should run the following commands:

```
cd federatednode
fednode stop counterparty counterparty-testnet
sudo su
rm -f data/counterparty/counterparty.*
exit
fednode update counterparty counterparty-testnet
fednode rebuild counterparty counterparty-testnet
```

Running the above commands will upgrade your counterparty fednode to the 9.60.2 release and start the download of the counterparty bootstrap databases. 

[**View counterparty-lib 9.60.2 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.60.2)