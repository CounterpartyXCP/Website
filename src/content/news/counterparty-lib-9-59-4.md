---
title: "Counterparty-lib 9.59.4 released!"
excerpt: >-
  Today counterparty releases version 9.59.4 which includes a hotfix for a sanity error which would cause a Counterparty server to stop operating normally. Upgrade Procedure for those running a federated node: cd federatednode/ fednode update counterparty counterparty-testnet fednode rebuild counterparty counterparty-testnet fednode rollback 698450 counterparty fednode start counterparty View counterparty-lib 9.59.4 Release Notes
categories: ["News"]
tags: []
author: Jeremy
date: 2021-09-01T01:53:20+00:00
status: published
slug: counterparty-lib-9-59-4
---

Today counterparty releases version 9.59.4 which includes a hotfix for a sanity error which would cause a Counterparty server to stop operating normally. **Upgrade Procedure for those running a federated node:**

```
cd federatednode/
fednode update counterparty counterparty-testnet
fednode rebuild counterparty counterparty-testnet
fednode rollback 698450 counterparty
fednode start counterparty

```

[**View counterparty-lib 9.59.4 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.59.4)