---
title: "counterparty-lib 9.55.4 released!"
excerpt: >-
  Today counterparty releases version 9.55.4 which includes a hotfix for an uncaught exception which could cause a Counterparty server to stop operating normally. There is no mandatory upgrade block for this release. However, all users are encouraged to upgrade as soon as possible. Upgrade Procedure For those running a federated node with no front-end: fednode
categories: ["News"]
tags: []
author: Jeremy
date: 2017-10-31T20:38:01+00:00
status: published
slug: counterparty-lib-9-55-4
---

Today counterparty releases version 9.55.4 which includes a hotfix for an uncaught exception which could cause a Counterparty server to stop operating normally.

There is no mandatory upgrade block for this release. However, all users are encouraged to upgrade as soon as possible.

Upgrade Procedure
-----------------

For those running a federated node with no front-end: `fednode update counterparty counterparty-testnet`

For those running a full federated node with counterwallet: `fednode update`

For standalone / manual installations: `pip install --upgrade counterparty-lib==9.55.4`

[**View counterparty-lib 9.55.4 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.4)