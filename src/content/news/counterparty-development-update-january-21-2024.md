---
title: "Counterparty Development Update — January 21, 2024"
date: 2024-01-20T23:00:00.000Z
slug: counterparty-development-update-january-21-2024
status: published
author: Adam
excerpt: >-
  Following the recent developments in Counterparty detailed in this thread (Joe
  Looney's Post), the community has recently come together to re-energize
  development of the protocol and ecosystem.
categories:
  - News
tags:
  - Development Update
---

Counterparty has always been an unusual cryptocurrency project. Counterparty launched in early 2014 as a “metaprotocol” on Bitcoin with token issuance and transfer, a working decentralized exchange and many other features that wouldn’t be replicated in other blockchains until years later. It supported the creation of some of the very first NFTs and blockchain-based artwork. But Counterparty never had an ICO, and so for years development of the core protocol has been under-resourced. The protocol has been stable, almost static, even as it hosts enormous value and includes millions of transactions in its history.

Following the recent developments in Counterparty detailed in this thread ([Joe Looney's Post](https://x.com/wasthatawolf/status/1746965484400947609?s=20)), the community has recently come together to re-energize development of the protocol and ecosystem. The Counterparty community acknowledges the immense amount of work done by Jeremy Johnson (a.k.a. J-Dog) and Javier Varona helping Counterparty to thrive for many years. Going forward, Adam Krellenstein, creator and co-founder of Counterparty, is joining Juan Alemán, Joe Looney, and JP Janssen as a primary maintainer of the Counterparty reference implementation and GitHub repository. Additionally, Ouziel Slama (another Counterparty OG) has recently rejoined the project, and he has already been working hard to bring the codebase up to a high standard of professionalism, stability and robustness.

# Development Priorities

## Testing!

Rigorous, regular testing is a critical part of any software project, *especially* a blockchain, which requires strict agreement between every node in the network in how each transaction is parsed and displayed. Unfortunately, the counterparty-lib test suite began failing many years ago, and that means that development that occurred during this period was especially likely to introduce bugs and regressions. By the heroic effort of Ouziel Slama over the past week, the test suite is [now finally passing again](https://app.circleci.com/pipelines/github/CounterpartyXCP/counterparty-lib/425/workflows/a1089840-02c0-4748-9409-94c2df646c58/jobs/2732)! This was a critical step in allowing developers to begin work on improving the core codebase, increasing stability, improving performance, adding new features, and generally speeding up development.

## Open-Source Block Explorer — [xcp.dev](http://xcp.dev/)

The Counterparty core dev team will be working hard to support development of [xcp.dev](http://xcp.dev/), an [open-source](https://github.com/CNTRPRTY/xcpdev) block explorer and public Counterparty API! With [xcp.dev](http://xcp.dev/), the community doesn’t have to rely only on [xchain.io](http://xchain.io/). We encourage all Counterparty users to start using [xcp.dev](http://xcp.dev/) as a block explorer and hosted API for personal and commercial projects.  Don’t worry—CSS is coming Soon™.

## Stop Relying on Bootstrap

Over the years, the Counterparty reference implementation has gotten slower at parsing the Bitcoin transaction log (also the log has just gotten longer!) As a consequence, the community has begun relying on the bootstrap command to spin up a new Counterparty node. This is problematic because bootstrap relies on a third-party to provide a copy of the entire history of the Counterparty network, breaking the core trust model and security guarantees of a blockchain. bootstrap is a convenient shortcut for getting up to speed, but it should never be used by commercial projects or public-facing services. The kickstart command, when fixed, will provide a good alternative to bootstrap for increasing the speed of the initial catch-up, but without the security compromises. We are, additionally, working to improve the performance of block parsing across the board to future-proof the platform and improve the end-user experience.

## PSBT Support

Currently, transactions constructed with the counterparty-lib API are presented in an old hex format. If we add simply add support for formatting this data as a standard partially-signed Bitcoin transaction ([PSBT](https://bitcoinops.org/en/topics/psbt/)), it will immediately unlock the possibility of high-quality, mature third-party wallet support for Counterparty, at least for some of its functionality. This is also the first step to implementing atomic swaps of BTC and Counterparty tokens.

## Art Preservation

There’s an enormous amount of valuable artwork hosted on the Counterparty network, but many of these pieces themselves are hosted on centralized services rather than being embedded in a blockchain. JP Janssen has built a database of these critical files and is [now hosting them](https://jpjanssen.com/counterparty-image-archives/) on BitTorrent, with an on-chain hash timestamping the contents.

# Recently Completed Work

* **Update all** **counterparty-lib** **dependencies.**
* **Fix the test suite, which is now running in CircleCI.**
* Refactor installation and deployment to use [Hatch](https://hatch.pypa.io/1.9/).
* counterparty-lib now requires Python >= 3.11.

# Short-Term Roadmap

* Re-introduce full reparse tests into CI; update official ledger checkpoints.
* Make the first release with tests working and following a proper release procedure.
* Remove the undolog, which is complex, fragile and unnecessary.
* Bring back kickstart, a faster way to get counterparty-server up and running for the first time: kickstart works by reading directly from a local bitcoind database, rather than pulling each block individually through the JSON-RPC API. This feature was broken at some point in the past, and we’re working to fix it ASAP.
* Linting and code scanning with PyLint, Bandit, etc.
* Merge counterparty-cli and counterparty-lib Git repositories, to simplify development, testing and deployment.
* Release a modern pip package for counterparty-core, also to ease deployment and testing.
* Implement the first round of performance improvements, including asynchronous block fetching and streamlined transaction parsing.
