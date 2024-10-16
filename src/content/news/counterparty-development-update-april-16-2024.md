---
title: 'Counterparty Development Update — April 16, 2024'
date: 2024-04-15T22:00:00.000Z
slug: counterparty-development-update-april-16-2024
status: published
author: Adam
excerpt: >-
  On April 9th, Counterparty v10.0.0 was finally released, which represented a
  huge effort over the past months to begin resolving long-standing issues with
  the stability, correctness and performance of the Counterparty reference
  implementation, and to prepare for future feature development.
categories:
  - News
tags:
  - Development Update
---

### v10.0.0 Release

On April 9th, Counterparty v10.0.0 was finally released, which represented a huge effort over the past months to begin resolving long-standing issues with the stability, correctness and performance of the Counterparty reference implementation, and to prepare for future feature development. The massive changelog is [available on GitHub](https://github.com/CounterpartyXCP/counterparty-core/blob/master/release-notes/release-notes-v10.0.0.md), marking the first major milestone after a huge acceleration in the pace of development of Counterparty. Nevertheless, v10.0.0 was a conservative release, with 100% backwards compatibility in the API, zero protocol changes and no new major features; however, it was definitely a very large release in terms of changes to the codebase.

### Network Halt

The same day v10.0.0 was released, a community member broadcasted a transaction that accidentally triggered a fatal bug in the protocol dispenser logic that had remained undiscovered in the codebase [for the past six years](https://github.com/CounterpartyXCP/counterparty-core/blame/c297e919c640655eb70273d225e35a3c3ac87b15/counterparty-lib/counterpartylib/lib/address.py#L60). Dispensers remain a major pain point for Counterparty development, because its design breaks a number of core architectural guarantees in the codebase, and the code is still almost entirely untested.This bug caused all nodes in the network immediately to halt in order to avoid undefined behavior. The core dev team was able to release patches to both v10 and v9.61 within only an hour and a half, and nodes that upgraded promptly experienced minimal downtime. Nevertheless, the event was disruptive to the network. Efforts to fix the dispenser logic and to improve the overall codebase test coverage are both on the near-term development roadmap.

### v10.0.0 Regressions, Public API Server Instability and v10.1.0 Release

Upon publishing v10.0.1 and v9.61.3, Adam Krellenstein switched the public API servers hosted at **[api.counterparty.io](http://api.counterparty.io/)** over to v10.0.1. Adam had previously disabled non-SSL connections to these servers, since plain HTTP is fundamentally insecure. Unfortunately, switching over these servers to v10.0.0 and requiring SSL caused three sets of issues for users to appear near-simultaneously:

1. Freewallet, the most popular wallet for Counterparty users, relies on this single endpoint for all operations and had not been updated to support SSL backends by default. As a consequence, many users experienced their wallets failing with a mysterious error message. The fix was a simple change in the configuration of Freewallet.
2. A number of regressions in v10.0.0 appeared, causing additional failures for a number of common operations, in particular in the popular dispenser functionality. The fixes for these were:
   1. Validate non-empty block\_indexes in call to api.get\_blocks
   2. Reproduce order expiration bug in v9.61.x
   3. Fix get\_blocks call when several block indexes are provided
   4. Fix create\_send when one of the outputs is a dispenser
   5. Fix get\_dispenser\_info RPC call
   6. Re-instate a missing definition for a AddrIndexRs error
3. There were also some general stability issues in the new sets of **[api.counterparty.io](http://api.counterparty.io/)** servers due to a too-heavy server health check and mempool parsing overloading AddrIndexRs.

Today, one week after the release of v10.0.0, we’ve released **v10.1.0**, which includes fixes for all of the above regressions, plus a number of other issues from the backlog. This version has already been pushed to the **[api.counterparty.io](http://api.counterparty.io/)** servers and has shown itself to be stable.

### Counterparty Whitepaper

On March 29th, Adam Krellenstein published a whitepaper for Counterparty—more than ten years after the network first launched: [Counterparty: An Extension to Bitcoin by State-Machine Replication](https://krellenstein.com/adam/get/counterparty-whitepaper_2024-03-29.pdf)

### AddrIndexRs Replacement

Serious progress is being made on replacing AddrIndexRs as a dependency for Counterparty Core. Not only does AddrIndexRs make deployment of Counterparty Core much more difficult than necessary, it also is the source of numerous consensus and stability issues. Working in Rust, we’re implementing an internal indexer of Bitcoin addresses and outputs that will plug directly into the Counterparty Core Python codebase and significantly improve overall performance, ease of use, stability and correctness.

### v10.1.1 (Upcoming)

We have already begun development on the next release of Counterparty Core, the goal for which is to fix long-standing high-priority bugs in the protocol codebase. GitHub has [a list of issues](https://github.com/CounterpartyXCP/counterparty-core/milestone/15) slated to be addressed for this upcoming version.
