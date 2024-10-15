---
title: "counterparty-lib 9.55.2 released!"
excerpt: >-
  NOTE: If you run a Counterparty node, please UPDATE your software as soon as possible with these instructions, prior to the block 467417 hard fork! &nbsp; Today we released version 9.55.2 of counterparty-lib, which adds the much anticipated “subassets” feature, as well as an update to use bitcoin-0.13.2. In short, subassets allow for owners of a specific named
categories: ["News"]
tags: []
author: Robby Dermody
date: 2017-04-25T17:52:18+00:00
status: published
slug: counterparty-lib-9-55-2
---

### NOTE: If you run a Counterparty node, please UPDATE your software as soon as possible [with these instructions](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.2), prior to the block 467417 hard fork!

 Today we released [version 9.55.2 of counterparty-lib](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.2), which adds the **much anticipated [“subassets” feature](https://github.com/CounterpartyXCP/cips/blob/master/cip-0004.md)**, as well as an update to use bitcoin-0.13.2. In short, subassets allow for owners of a specific named parent asset (such as “DOMINOS”) to create a child token (such as “DOMINOS.Coupon\_34930”) that can be managed, sent and traded independently. This has numerous potential uses on the Counterparty network, from additional in-game items within Counterparty’s growing in-game economy to tradable “blockchain domain names” on Bitcoin. Support for subassets is currently almost complete in [Counterwallet](http://wallet.counterwallet.io) and will be released on testnet within the week, as well as implemented in other Counterparty-aware wallets such as [Indiesquare Wallet](https://wallet.indiesquare.me/), [Freewallet](https://freewallet.io/) and [Book of Orbs](http://bookoforbs.com/) shortly. Subasset functionality is currently live on Bitcoin testnet, and will go live on Bitcoin mainnet on **block 467417**, in approximately **3 weeks (~May 22)**. It is important that all parties running a Counterparty node [update their software as soon as possible](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/9.55.2). In the meantime, feel free to jump onto [Counterwallet testnet](https://counterwallet.io/) and play around with them! And speaking of Counterwallet, we have also recently added the ability to specify custom fees, as well as implemented a new caching layer to improve performance and responsiveness.

Development Process
-------------------

 The development of this feature was particularly noteworthy, as [the implementation of it](https://github.com/CounterpartyXCP/counterparty-lib/pull/961) was made by a member of our community off of the [specs](https://github.com/CounterpartyXCP/cips/blob/master/cip-0004.md) written by a different member of our community. These specs were written to our [CIP standards guidelines](https://github.com/CounterpartyXCP/cips/blob/master/cip-0001.md) (similar to the BIP specifications that Bitcoin uses) and financed via our the newly created [CIP Bounty process](https://github.com/CounterpartyXCP/cips/blob/master/cip-0008.md). These processes will allow for sustainable Counterparty development moving forward as various members of the community can easily plug in and contribute in a variety of ways, all dictated by standards that the community as a whole as agreed to.

Upcoming Roadmap
----------------

 Beyond this, **drastically cheaper send transactions** (with [CIP009](https://github.com/CounterpartyXCP/cips/blob/master/cip-0009.md)) and **multisend** (via the upcoming CIP010) is in the pipeline next, along with the implementation of a **more flexible token voting system** as detailed in [CIP005](https://github.com/CounterpartyXCP/cips/blob/master/cip-0005.md) and more Counterwallet improvements. **Preliminary segwit support is also implemented**, and waiting on finalized upstream libraries to be released. Stay tuned! Counterparty is a community-run project with no corporate entity or ICO funding, and – like Bitcoin – we rely entirely upon the effort of volunteers and enthusiasts. Feel free to ask questions or get involved by contacting us on [our Slack chat](https://slack.counterparty.io).