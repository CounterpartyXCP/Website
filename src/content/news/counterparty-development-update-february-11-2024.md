---
title: 'Counterparty Development Update — February 11, 2024'
date: 2024-02-10T23:00:00.000Z
slug: counterparty-development-update-february-11-2024
status: published
author: Adam
excerpt: >-
  Ouziel has spent the past couple of weeks on a Herculean effort to fix core
  blockchain parsing logic and rollback functionality, as well as recovering the
  lost kickstart functionality and removing the undolog
categories:
  - News
tags:
  - Development Update
---

Ouziel has spent the past couple of weeks on a Herculean effort to fix core blockchain parsing logic and rollback functionality, as well as recovering the lost kickstart functionality and removing the undolog. See [the pull request](https://github.com/CounterpartyXCP/counterparty-lib/pull/1349). A full network parse on testnet, now takes just **2 hours** with kickstart 🎉, down from 3–4 days previously (without kickstart). This eliminates the dependence on the centralized bootstrap function for node deployment, and allows for regular network reparses in CI. As mentioned previously, this involved making some improvements to the database architecture, allowing for a major simplification of the codebase, as well as fixing a few sources of potential non-determinism.

The next steps are to produce new network checkpoints on mainnet (last one recorded is from 2016), then prepare a new release, merge counterparty-cli into counterparty-core, produce installation packages, etc. It's still unclear if it's going to be necessary to make the next version a mandatory upgrade—it depends on what kinds of non-deterministic behavior there may have been on mainnet over the years.

Because of the changes to the DB schema, the next release will definitely require all nodes to complete a full blockchain reparse. We can’t ask that of users if it takes forever to complete, however. And we don’t want to ask users to rely on kickstart if we don’t have to, because running kickstart requires stopping bitcoind, which is not very user-friendly. As a consequence, we're probably going to work on implementing some significant performance optimizations first, in particular by refactoring the code that inserts transactions read from the blockchain into the Counterparty database so that we can run this process concurrently. Unfortunately the particular way that dispensers were implemented makes this unduly challenging.

Thanks to the community's generous donations 🙏🙏🙏, a new dev will be starting tomorrow to work on the Counterparty reference implementation alongside Ouziel. His first major project will probably be to look into the feasibility of completely eliminating the addrindexrs dependency, which would be a *huge* win for ease of use, performance, and node resource consumption. Beyond that, there is [a number of “priority” GitHub issues](https://github.com/CounterpartyXCP/counterparty-lib/issues?q=is%3Aopen+is%3Aissue+label%3Apriority+) that need to be addressed ASAP.
