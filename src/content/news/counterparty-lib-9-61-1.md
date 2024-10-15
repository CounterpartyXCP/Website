---
title: Counterparty-lib 9.61.1 released!
date: 2023-12-01T19:57:20.000Z
slug: counterparty-lib-9-61-1
status: published
author: Jeremy
excerpt: "Today counterparty-lib releases version 9.61.1 which\_fixes a parsing issue which stops counterparty from parsing."
categories:
  - News
tags: []
---

Today counterparty-lib releases version 9.61.1 which fixes a parsing issue which stops counterparty from parsing.

* Fixed invalid `null`` description on first issuance`` - [`[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1283)`]`
* Fixed issue with `transaction_outputs` table not handling reorgs properly` - [`[more info](https://github.com/CounterpartyXCP/counterparty-lib/pull/1286)`]`

## **Upgrade Procedure:**

For those running a federated node you should run the following commands:

```
fednode update counterparty counterparty-testnet
fednode rebuild counterparty counterparty-testnet
```

Running the above commands will upgrade your counterparty fednode to the 9.61.1 release **[View counterparty-lib 9.61.1 Release Notes](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.61.1)**
