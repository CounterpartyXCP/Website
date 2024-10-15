---
title: "Counterparty-lib 9.59.3 released!"
excerpt: >-
  This release includes a minor revision that fixes non-divisible asset dividends. Upgrade Timing Update should be done ASAP as this release has a block activated feature on block 670,000 which is consensus affecting. Upgrade and update via bootstrap ASAP. For those running a federated node: cd federatednode/ fednode stop git pull sudo rm -f data/counterparty/counterparty.*
categories: ["News"]
tags: []
author: Jeremy
date: 2021-02-17T03:14:18+00:00
status: published
slug: counterparty-lib-9-59-3
---

This release includes a minor revision that fixes non-divisible asset dividends. **Upgrade Timing**Update should be done ASAP as this release has a block activated feature on block 670,000 which is consensus affecting. Upgrade and update via bootstrap ASAP. **For those running a federated node:**

```
cd federatednode/
fednode stop
git pull
sudo rm -f data/counterparty/counterparty.*
sudo rm -rf data/indexd
fednode uninstall
fednode install full master
fednode rebuild counterparty counterparty-testnet

```

[**View counterparty-lib 9.59.3 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.59.3)