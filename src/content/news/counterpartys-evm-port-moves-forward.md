---
title: "Counterparty's EVM Port Moves Forward"
excerpt: >-
  NOTE: We have created a FAQ page for EVM/smart contracts. As most of you are aware, Counterparty is completing a port of the Ethereum Virtual Machine (EVM) to Bitcoin. When we heard about the attack that was successfully carried out earlier on the DAO contract code, it hit close to home. We’re saddened by the losses
categories: ["News"]
tags: []
author: Jeremy
date: 2016-06-27T11:01:01+00:00
status: published
slug: counterpartys-evm-port-moves-forward
---

_**NOTE:** We have created a [FAQ page](http://counterparty.local/docs/faq-smartcontracts/) for EVM/smart contracts._

As most of you are aware, Counterparty [is completing a port](http://counterparty.local/news/evmparty-progress-update/) of the Ethereum Virtual Machine (EVM) to Bitcoin. When we heard about the attack that was successfully carried out earlier on the DAO contract code, it hit close to home. We’re saddened by the losses that everyone experienced recently and we hope for the best possible outcome given the circumstances.

Smart contract technology is very powerful and possesses certain risks that are quickly becoming evident. Our [long-time, cautious interest](http://counterparty.local/news/counterparty-recreates-ethereums-smart-contract-platform-on-bitcoin/) in the technology is due to the fact that it gives the ability to design and build complex financial contracts on Bitcoin: the most tested and secure blockchain there is. However, Bitcoin’s own internal scripting language cannot come close to replacing the power and flexibility of Turing-complete smart contracts. Progress is not easy, and we believe that the EVM will continue to grow, mature and improve as time goes on.

Our work on the EVM port is **continuing as planned**, and Counterparty developer Ruben De Vries is making [solid progress](https://github.com/CounterpartyXCP/counterparty-lib/commits/evmparty). We expect an initial release on Bitcoin testnet in about two weeks. Our current EVM code has almost **85% test coverage** (and growing), which is higher than pyethereum itself. Our final release will include all EVM functionality, be fully compatible with existing Ethereum smart contracts, and allow interaction with Counterparty assets.

To minimize the chance of a situation like what happened with The DAO occurring on Counterparty, we are taking the following actions:

-   **On Counterparty, authors of smart contracts will be responsible for bugs in their contracts.** The Counterparty Foundation Board, with development team guidance, has passed a **“non-rollback”** amendment to the Bylaws. This policy forbids the Counterparty development team from publishing code to fork and/or roll-back the network as a response to bugs in specific smart contracts. (Where the fault is due to a bug in the underlying EVM -- and not any specific smart contract that runs on it -- the development team will of course write and publish bug fixes.) This action reiterates how Counterparty has been run for over two and a half years, and is in the same spirit of Bitcoin itself: completely decentralized, community-driven, and non-profit.

-   **The Counterparty community will have final control over the EVM.** With [XCP-based stake voting](https://github.com/CounterpartyXCP/cips/blob/master/cip-0005.md) being [added to the protocol](https://github.com/rubensayshi/counterparty-lib/pull/3), we have solidified a plan for a community-driven “EVM SafeGuard” feature. Using this system, a certain (significant) percentage of XCP holders may at any time vote to deactivate the EVM. Such a vote will cause the **Counterparty protocol itself** to initiate a rapid shutdown of the EVM subsystem **while the rest of the Counterparty network continues to function perfectly**. At any time after that, a similar stake vote can re-enable the EVM system.

Unlike Ethereum, where smart contracts are a fundamental and required component of most any action beyond sending Ether, our system is designed so that our core feature-set is completely independent of any smart contract functionality. This means that anyone can use Counterparty’s well-tested asset creation, transfer and decentralized trading features **without having to interact with or otherwise touch smart contracts**.

These steps will allow the benefits of smart contracts to be realized with more defined guardrails in place. Please feel free to ask questions, contribute your views and get involved on [our Slack chat](http://slack.counterparty.io).