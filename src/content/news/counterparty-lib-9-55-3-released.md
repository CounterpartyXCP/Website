---
title: "counterparty-lib 9.55.3 released!"
excerpt: >-
  NOTE: If you run a Counterparty node, please update your software as per these instructions within the next 2 weeks, prior to the block 489956 hard fork! &nbsp; Today we released version 9.55.3 of counterparty-lib, which notably includes a reduction in the cost of all Counterparty transactions, cheaper sends with memo support, easier exchange integration, and
categories: ["News"]
tags: []
author: Jeremy
date: 2017-09-30T18:15:19+00:00
status: published
slug: counterparty-lib-9-55-3-released
---

### NOTE: If you run a Counterparty node, please update your software as per [these instructions](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.3) within the next 2 weeks, prior to the block 489956 hard fork!

 Today we released [version 9.55.3 of counterparty-lib](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.3), which notably includes a reduction in the cost of all Counterparty transactions, cheaper sends with memo support, easier exchange integration, and a lock issuance bugfix. This release includes the following updates :

- **[CIP 9](https://github.com/CounterpartyXCP/cips/blob/master/cip-0009.md) – Enhanced sends with memo field support**
CIP 9 adds additional functionality to an asset send while at the same time making asset sends 40-45% cheaper and more efficient. Enhanced sends have a smaller transaction size, [eliminate dust outputs](https://www.blocktrail.com/tBTC/tx/4b89d8e2289e6afc0027a110341b4bd59fea3b0dc5a006b7636c2b9f6bb6c3a0), and add a memo that enables greater efficiency and lower transaction fees for exchange operators.

- **[CIP 11](https://github.com/CounterpartyXCP/cips/blob/master/cip-0011.md) – Shorten Transaction Type ID Namespace**
CIP 11 reduces the size of ALL Counterparty transactions by 3 bytes, thereby further lowering the transaction costs (BTC fees).

- **[CIP 12](https://github.com/CounterpartyXCP/cips/blob/master/cip-0012.md) – Memo Requirement through Broadcasts**
CIP 12 will allow services such as exchanges, to require that a memo be included with a send. This requirement allows exchanges to have their customers deposit directly to the exchange hot-wallet, and reduces the operational cost of using Counterparty in an exchange environment.

   
- Fixed lock issuance workaround

All the above updates are currently live on Bitcoin testnet, and will go live on Bitcoin mainnet on block 489956, in approximately 2 weeks (~October 16). It is important that all parties running a Counterparty node [update their software as soon as possible](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.3). In the meantime, feel free to jump onto [Counterwallet testnet](https://counterwallet.io) and play around with them!

Exchange operators should review the updated "[Counterparty Exchange Integration](http://counterparty.local/docs/exchange_integration/)" documentation to familiarize themselves with how they can greatly reduce their operational costs by handling customer deposits using memos.

Counterparty is a community funded project which progresses solely through the generous time and monetary donations of others. Please visit our [donations page](http://counterparty.local/donate/) to stay up to date on the current bounty and development status of any CIPs, and consider making a donation to support continued development.