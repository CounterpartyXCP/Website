---
title: Counterparty Partial network outage - Post mortem
date: 2024-10-17T14:00:00.000Z
slug: counterparty-partial-network-outage-post-mortem
status: published
author: Adam
excerpt: >-
  A non–consensus bug was triggered at the activation block of the recent protocol change which caused many nodes to slow to a halt, causing a partial network outage. We released a hotfix which resolves the issue, and any users experiencing issues should upgrade to this version.
categories:
  - News
tags:
  - v10
  - Outage
---

# Summary

**A non–consensus bug was triggered at the activation block of the recent protocol change which caused many nodes to slow to a halt, causing a partial network outage. We released a hotfix [v10.4.7](https://github.com/CounterpartyXCP/counterparty-core/releases/tag/v10.4.7) which resolves the issue, and any users experiencing issues should upgrade to this version.**

# Timeline

The protocol change for Counterparty Core v10.4.x went live at block 866,000. This change introduced a very large number of new features to the Counterparty protocol, including: 

- **UTXO Support**
- **Fair Minting Protocol**
- **Free Subassets**
- **Subassets on Numeric Assets**
- **Be Able to Lock Descriptions**

Unfortunately one of these features—UTXO Support—introduced a new database call that, while performant on `testnet`, caused Counterparty nodes to slow to a halt on `mainnet`, where the blocks are much larger. This left all Counterparty nodes that had upgraded stuck on block 865,999 after approximately 06:30 GMT.

We released a version v10.4.6 at 09:40am GMT which included a patch for the issue, which involved caching the results from the `get_utxos_info()` call in RAM. We publicized this release on Twitter as well as on Telegram. However there was an unexpected regression, which introduced the new Waitress API server, that caused the v1 API to break. Passing in the CLI argument `--wsgi-server=werkzeug` allowed users to bypass that problem—this was discovered at 13:50 GMT and shared with the community. At 17:00 GMT we released v10.4.7 which fixes this issue as well.

# Analysis

The above two bugs were the result of two sets of missing tests:

1. Failure to test the Counterparty code with `mainnet` blocks before the activation period. Extensive testing was performed against `testnet`, but `mainnet` blocks are much larger, so the performance issue didn’t appear until the activation block. There is in fact a feature in the Counterparty Core test suite called `testcoin` that allows for the creation of a parallel Counterparty network on `mainnet` to test just such things… however, that feature was not used in this case as it should have been.
2. Waitress is a WSGI server meant to replace Werkzeug for production settings. Werkzeug has been the default server since Counterparty was created, but it has relatively poor performance. We had recently added support for Waitress and made it the default WSGI server (but maintained support for Werkzeug), however a bug in the implementation caused it to break API v1 → v2 redirection. We did not discover the regression in API v1 due to the fact that all of our testing still done with the Werkzeug server, which was an oversight.

The consequence of this outage was a number of hours of downtime for a large fraction of nodes. There were no consensus breaks, and once a node has upgraded, it will catch up with the Bitcoin blockchain as per usual. We have released Counterparty Core [v10.4.7](https://github.com/CounterpartyXCP/counterparty-core/releases/tag/v10.4.7), which fixes all of the above issues and any users experiencing issues should upgrade to this version.

