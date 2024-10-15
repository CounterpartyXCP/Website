---
title: 'Development Update: Enlarging the team and laying out our roadmap'
date: 2016-02-08T07:19:51.000Z
slug: development-update-02-2016
status: published
author: Robby Dermody
excerpt: >-
  — Robby Dermody We’re pleased to announce that Ruben De Vries aka
  “rubensayshi”, has joined the Counterparty core development team. Ruben is the
  current CTO of Bitcoin wallet company Blocktrail, and has actively been
  involved in Bitcoin software development professionally since 2013. Over the
  past half year, he has contributed significantly to the Counterparty codebase,
categories:
  - News
tags: []
---

We’re pleased to announce that [Ruben De Vries](https://www.linkedin.com/in/ruben-de-vries-88813144) aka “rubensayshi”, has joined the Counterparty core development team. Ruben is the current CTO of Bitcoin wallet company Blocktrail, and has actively been involved in Bitcoin software development professionally since 2013. Over the past half year, he has contributed significantly to the Counterparty codebase, overhauling Counterwallet for it’s [1.7 release](https://github.com/CounterpartyXCP/counterwallet/pull/769), and working with me to [greatly enhance](https://github.com/CounterpartyXCP/counterparty-lib/pull/832) counterparty-lib’s performance and stability. Ruben will add significant bandwidth to the Counterparty development team, and help keep Counterparty at the forefront well into the future.

Looking into that future, our roadmap for the next six months includes some interesting and exciting features:

**Subassets:** With subassets, an owner of an named asset, will be able to create a “child” asset, whose name is based off of the parent. For instance, consider a case where the owner of “PIZZA” could make a subasset called “PIZZA.Dominos”. This “PIZZA.Dominos” subasset could then be transferred, traded, and more, just like “PIZZA” can.

Subassets bring a new level of flexibility with asset naming that should be very useful to projects like [Spells of Genesis](http://spellsofgenesis.com/) and [Coindaddy](https://coindaddy.io/). Currently, we have a draft Counterparty Improvement Proposal known as [CIP 4](https://github.com/CounterpartyXCP/cips/pull/4) for adding support for this feature here on github. We are expecting approval of this shortly, and then work will begin on the core implementation of the feature in counterparty-lib. This work will be ultimately delivered as a new counterparty-lib version, complete with some minor API changes. Once released, the feature will go live on testnet immediately, and go live on mainnet a few weeks later. This will give some time for others to add support for this feature to their products, which should be very straightforward to do.

**P2SH multisig:** counterparty-lib currently supports “bare multisig”, which essentially allows multisig transactions through the use of a Counterparty-specific address string such as *“2\_1HrSbJR3fcjCDrp2mMJCzGrWR7jtYu4wq5\_1Dzfoo4QmhMtHNthmC8hZBry3KPS9FUtgo* 152f1muMCNa7goXYhYAQC61hxEgGacmncB\_3”\_. With the upcoming P2SH multisig support, sending directly to and from “pay-to-script-hash” addresses (which start with a “3” on Bitcoin mainnet) will be supported as well. This allows for easier, more intuitive use of multisig with Counterparty. Currently, the initial [P2SH patch](https://github.com/CounterpartyXCP/counterparty-lib/pull/818) has been developed by Ruben and is being vetted further, before being included in an upcoming release.

**Segregated Witness**: We will soon be adding “segwit” support to Counterwallet. This will lead to cheaper transactions and bring us in-line with the Bitcoin core development roadmap.

**Asset history:** We will be enhancing counterparty-lib to record a full history log for each asset, and make this log available via a new API call. This new, more powerful API will help to greatly simplify things for third-party Counterparty developers.

**Additional performance and stability updates:** In the wake of the Bitcoin “stress testing” that we saw in earnest about midway through 2014, counterparty-lib and counterblock have undergone extensive changes to their internal transaction processing mechanics, especially around the low-level counterparty-lib integration code with Bitcoin core. The new versions remain stable and responsive, even in the face of very large transaction backlogs. As we move into 2016 we will be further enhancing and tweaking this code as necessary, to ensure that the average user’s interaction with Counterparty-driven wallets, websites, vending machines and more remains as speedy and reliable as possible.

Beyond these upcoming new core features, we’re also looking forward to the conclusion of [DevParty](http://counterparty.local/devparty/) shortly, and the release of several new Counterparty integrations as a result. Thanks for the community support, and don’t forget to join our [slack chat channels](http://slack.counterparty.io/)!
