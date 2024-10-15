---
title: "Counterparty-lib 9.57.0 released!"
excerpt: >-
  This release includes Dispensers and Sweeps (Protocol level, single message) support, a bitcoin version bump up to 0.18.1, and other improvements. Upgrade Timing Update should be done ASAP as the rules are already active. Bootstrap download or a full reparse is required as there's already some dispensers active in mainnet and old nodes won't pick
categories: ["News"]
tags: []
author: Jeremy
date: 2019-10-24T16:25:35+00:00
status: published
slug: counterparty-lib-9-57-0
---

This release includes Dispensers and Sweeps (Protocol level, single message) support, a bitcoin version bump up to 0.18.1, and other improvements.

### Upgrade Timing

Update should be done ASAP as the rules are already active. Bootstrap download or a full reparse is required as there's already some dispensers active in mainnet and old nodes won't pick them up (and diverge).

**For those running a federated node:**```
cd federatednode/
fednode stop
git pull
sudo rm -f data/counterparty/counterparty.*
fednode update
fednode rebuild
```

[**View counterparty-lib 9.57.0 Release Notes**](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.57.0)