---
title: 'Counterparty Development Update — August 9, 2024'
date: 2024-08-08T22:00:00.000Z
slug: counterparty-development-update-august-9-2024
status: published
author: Adam
excerpt: >-
  This is a very exciting time in the history of Counterparty. After months of
  heads-down work on the Counterparty Core codebase, the dev team is ready to be
  able to implement major new improvements to the Counterparty protocol.
categories:
  - News
tags:
  - New features
  - Development Update
---

This is a very exciting time in the history of Counterparty. After months of heads-down work on the Counterparty Core codebase, the dev team is ready to be able to implement **major new improvements** to the Counterparty protocol. The Counterparty codebase is finally able to provide a firm foundation for extending the existing protocol to entirely new use cases as well as relieving major pain points that have caused problems in the community for years.

The work we’ve been doing has focused on improving the overall quality and stability of the codebase. This was critically necessary work given that the codebase was not actively maintained for many years. However, over just the past eight months, the Core dev team has already made **8**  **releases**, closed **hundreds of issues**, and made numerous improvements to the codebase which make it easier to run, use and develop against a Counterparty node.

![](https://static.wixstatic.com/media/aebdcb_fc9e0c0a856a40fc879224d3da13b1d0~mv2.png/v1/fill/w_1192,h_460,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aebdcb_fc9e0c0a856a40fc879224d3da13b1d0~mv2.png)

Counterparty has never seen so much development activity in its entire history. Highlights include:

* Major performance improvements
* A much more stable codebase
* Dramatically easier node deployment
* A totally rebuilt, RESTful node API
* A fully redesigned CLI and logging system
* Upgrades to all of the upstream dependencies
* A functional test suite
* Innumerable fixes for bugs and potential security issues

That work was all very important, especially for community members running their own nodes, but almost none of it *directly* affected end users of Counterparty and Counterparty-based systems. Upcoming features will. We’ve listened carefully to the community and planned **ten** protocol upgrades just for next release—v10.4.0. These protocol changes are based on extensive discussion over the past months, both on GitHub and on Telegram, and there are also now have proposed formal specifications for each of those protocol changes, hosted as Gists. Some of the issues already also have GitHub pull requests with implementations.

### Fair Minting Protocol \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1843), [Spec](https://gist.github.com/adamkrellenstein/3eb9fe4add4ecbfcfc392ae9ef04ae55), [PR](https://github.com/CounterpartyXCP/counterparty-core/pull/2142)]

Fair Minting is a new feature in Counterparty that allows users to mint tokens in a decentralized manner. It offers multiple modes of operation, including minting with miner fees only, XCP fees distributed to the issuer, or XCP fees that are burned. The feature includes additional functionality such as soft caps, commissions, and customizable start and end blocks, providing a flexible and fair token distribution mechanism.

### Subassets on Numerics \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1842), [Spec](https://gist.github.com/adamkrellenstein/fe4b64ffd02d17db51c7ab2dda30d093)]

There is no particular reason to disallow subassets on numeric assets and there is a strong community demand to be able to do so.

### Eliminate Fee on Subasset Registration \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1840), [Spec](https://gist.github.com/adamkrellenstein/e21a38c643c5bf2f4dc58952becc6d7c)]

XCP fees for issuances are principally an *anti-squatting* mechanism (since the BTC fee is sufficient in this case to prevent true SPAM). For subassets, which are namespaced by the parent asset, there’s no need to limit the number of issuances in any way.

### Be Able to Lock Descriptions \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1857), [Spec](https://gist.github.com/adamkrellenstein/94bd304ca4e464b6d5db0da2b05e3075)]

From a collectors point of view, it is often important to be sure that all characteristics of an asset are immutable to establish the permanency of the object being traded. For this reason there is a strong demand from the community to add the possibility to lock the description of an asset.

### Require Dispenser Address to be Source Address \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1785), [Spec](https://gist.github.com/adamkrellenstein/04178f3f761ab5826afeb51eec817547), [PR](https://github.com/CounterpartyXCP/counterparty-core/pull/2140)]

For years, it has been possible for users to open dispensers at addresses that they don’t own, which is of course a major security issue. An incomplete fix was implemented last November; this is a proper fix for the issue, and it also allows for all nodes to eliminate the very painful and heavy dependency on AddrIndexRs (introduced in November) which has been the source of huge numbers of stability, performance and correctness issues.

### Implement Dispense Transaction Type \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1825), [Spec](https://gist.github.com/adamkrellenstein/e9162e89f9dc6521f17c9b2693eda52c), [PR](https://github.com/CounterpartyXCP/counterparty-core/pull/2141)]

As currently implemented, it’s possible to trigger a dispenser with a vanilla Bitcoin transaction—i.e. without using a Counterparty transaction that’s labelled as such. This was not part of the original specification for the feature, and it is responsible for significant loss of funds due to accidental and invalid dispenses, not to mention major performance and code quality issues. With this protocol change, users will have to use a Counterparty wallet to trigger a dispense (which they already have to do to make use of the funds that they’ve purchased). The create\_send API call will be made to emulate the function of the new create\_dispense function so as to keep the API backwards-compatible.

### Expire order matches then orders \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/pull/1633), [PR](https://github.com/CounterpartyXCP/counterparty-core/pull/1794)]

This fixes an old bug that was originally the cause for Counterwallet failing. It has since been worked around, but it’s worth fixing properly.

### UTXO Support \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1939), [Spec](https://gist.github.com/adamkrellenstein/ae7c94de7363960e876ad82e2c50adb2)]

This feature introduces UTXO support for Counterparty assets, allowing them to be attached to and detached from specific UTXOs. The change aims to benefit Counterparty asset owners by providing access to greater liquidity and a larger ecosystem associated with Ordinals.

### Native Atomic Swaps \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1939), [Spec](https://gist.github.com/adamkrellenstein/f1322377cb496efa4d4345cb06f1fcd9)]

Native Atomic Swaps is a feature designed to enable secure, single-confirmation trades between Counterparty assets and Bitcoin⁠ assets such as Ordinals and Runes. It allows placing and concluding a BTC sale order in a single transaction per party, storing escrowed assets for an order in UTXOs and offering an on-chain solution to store and revoke PSBTs.

### Gas System for UTXO Support \[[Issue](https://github.com/CounterpartyXCP/counterparty-core/issues/1431), [Spec](https://gist.github.com/adamkrellenstein/7c7cab257cee162233fc2ba6682eb8da)]

When Counterparty was first created, the XCP fees for various transactions were hard-coded to low, constant values (e.g. 0.5 XCP for issuing a named asset). This system was chosen for its simplicity, but it creates significant friction when onboarding users to the Counterparty ecosystem (esp. since it is so hard to acquire XCP) and yet the fees are so low that they have little economic significance for market participants. This protocol change will implement a proper XCP fee system specifically for attaching Counterparty assets to UTXOs (but not detaching assets). This fee system will be dynamic and based on the average number of Counterparty attach operations per block for the past Bitcoin difficulty period. The function will be *zero* below 3 tx/block, a sigmoid centered at 1 XCP between 3 and 15 tx/block, and then exponentially growing above 15 tx/block, as depicted in the below chart.

![](https://static.wixstatic.com/media/aebdcb_2dad6ab6207d41fcb068440eb887eacc~mv2.png/v1/fill/w_1192,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/aebdcb_2dad6ab6207d41fcb068440eb887eacc~mv2.png)
