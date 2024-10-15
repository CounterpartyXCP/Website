---
title: "Proposal for Ethereum Smart Contracts on Counterparty Mainnet"
excerpt: >-
  Background and Progress In late 2014, Counterparty added support for executing Ethereum smart contracts on testnet by porting the Ethereum Virtual Machine (EVM) to our codebase. At this time, Ethereum was in a pre-alpha state, with its first major release, Frontier, not even having been announced. With the release of both Frontier, followed by Homestead
categories: ["News"]
tags: []
author: Robby Dermody
date: 2016-05-10T17:57:18+00:00
status: published
slug: proposal-for-ethereum-smart-contracts-on-counterparty-mainnet
---

## Background and Progress

In late 2014, Counterparty [added support](http://counterparty.local/news/counterparty-recreates-ethereums-smart-contract-platform-on-bitcoin/) for executing Ethereum smart contracts on testnet by porting the Ethereum Virtual Machine (EVM) to our codebase. At this time, Ethereum was in a pre-alpha state, with its first major release, Frontier, [not even having been announced](https://blog.ethereum.org/2015/07/22/frontier-is-coming-what-to-expect-and-how-to-prepare/). With the release of both Frontier, followed by Homestead [in late February](https://blog.ethereum.org/2016/02/29/homestead-release/), the Ethereum Virtual Machine has been maturing nicely. We believe that we are now at the point where we can consider deploying the EVM on Counterparty mainnet in a safe, controlled fashion.

Over the last month, Counterparty developer **Ruben De Vries** has been porting the newest released version of the EVM to Counterparty. **His implementation now passes the Python EVM testsuite.**

What is now left is to decide on several crucial additional features, safeguards, and limits, to determine exactly how this rollout would proceed, and then perform a “go/no-go” vote that we think will allow us to achieve the best idea of consensus among the Counterparty community, Board, and industry players.

## Mechanics

We propose that Counterparty complete this EVM development to support for the newest stable version of the EVM to Bitcoin/Counterparty mainnet. Our port supports all of the functionality that Ethereum itself supports, **as well as allowing contracts to work with any Counterparty asset.** Similar to Ethereum itself, Contracts may only manipulate their own balances, not the balances of arbitrary addresses. Given this, we see this EVM functionality as overall a low-risk addition for those who do not use smart contracts and simply utilize the existing token mechanics of the platform.

As a protection to any major issues, however, we propose an **EVM safeguard** feature, which would allow the Counterparty development team to disable the EVM on mainnet if a critical bug is found and/or exploited. To add this EVM safeguard feature, counterparty-lib would be enhanced to recognize a special [broadcast transaction](http://counterparty.local/docs/broadcast/) generated from a specific 2-of-3 [multisig](http://counterparty.local/docs/multisig_counterwallet/) address that was secured by the core Counterparty development team. Through a simple command embedded in the broadcast text field, a “DisableEVM” or “EnableEVM” command would be a regular Counterparty transaction, its use would be readily auditable by the community. The community would also be notified of the development team’s intent to issue the command via the [Counterparty forums](https://counterpartytalk.org/) and the [Slack #dev chat channel](http://slack.counterparty.io/). Given the still-beta nature of the EVM and Counterparty’s history of maintaining a trusted, responsible network, we believe that this is a wise feature to have at least for a certain period of time -- most likely being removed six months after the [Ethereum Metropolis release](https://blog.ethereum.org/2015/03/03/ethereum-launch-process/), which is when the EVM is forecast to be in a stable condition. The EVM safeguard would be used by the development team as necessary to ensure the stability of the Counterparty network in worse-case scenarios with the EVM.

Our plan is to release the most up-to-date Counterparty-enabled Ethereum VM along with the EVM Safeguard feature, on testnet first. The two will then be extensively taken through their paces by both the developers and larger community. Once we are satisfied with their stability, a subsequent release will be performed where the functionality will be enabled on mainnet as of a specific block number, normally one or two weeks in the future. Updated [mainnet checkpoints](https://github.com/CounterpartyXCP/counterparty-lib/blob/master/counterpartylib/lib/check.py) will be included as well for an extra degree of security. Our existing, generous [bug bounty program](http://counterparty.local/bounties/) will remain in effect to aid in discovery of bugs and hopefully avoid the need to test the EVM safeguard feature.

## Discussion and Voting

With such a significant change, we want to give everyone the ability to voice their opinions. We propose an approximately **one month discussion period**, followed by a **one week voting period**.

During the discussion period, numerous implementation issues will need to be discussed. These include:

-   Whether the EVM safeguard feature and our code partitioning practices will be sufficient from a security perspective.
-   Outlining potential performance issues, and determining if certain contract execution hard caps are needed outside of the natural controls that using gas provides.
-   Determining if contracts should have their own address prefix (eg; CiLUGp1hc7aooWWh89MAV6Gu11E7tMz267), which would avoid accidental sends (both BTC and assets) to a contract.
-   Determining whether to use XCP for gas, or an “XCPC” stake token that is periodically awarded to XCP holders by the protocol, based on their XCP holdings.
    -   If XCP is used, a solution to control the rate of deflation will need to be found, as unlike Ether, no additional XCP will be created. That, or XCP consumed could be frozen for some period of time, imposing an opportunity cost.
    -   If “XCPC” is used, the rate of generation and caps on the max number of XCPC in existence at any one time will need to be discussed and established.
-   Determining if we have the necessary resources required to maintain the port long-term. This will include soliciting pledges from talented developers in the community.

The discussion period will be concluded by the Counterparty development team when we believe that the issues above, and any others, have been resolved adequately.

The goal of the subsequent voting period is to determine, based on the published results of the discussion, whether the EVM port to mainnet should be undertaken. During the voting period, the following groups will be represented:

-   **Community:** Community-level voting will be performed via broadcasts, with votes based on amount of XCP held (similar to the recent Counterparty Foundation elections). Balances used will be as of the date and time of the release of this announcement.
-   **Board:** Broadcast-based voting will be utilized, with each member of the Counterparty Board getting a single vote.
-   **Industry:** Broadcast-based voting will be utilized, with a representative of each of the nine most established and central companies building on Counterparty (as chosen by the Board) getting a vote.

We will only move forward **if a two-thirds majority of the votes cast is achieved in each of the respective groups**.

We welcome further discussion in the newly created [**#evmparty** channel on Slack](http://slack.counterparty.io/). Ruben will continue his work on the EVM port during the discussion period, which should help lend clarity during the voting period to implementation-level questions. If the proposal is agreed to, we estimate the initial release on testnet could be completed in an additional **one month timeframe**.

Developers interested in helping out are particularly welcome, and we are always open to quality pull requests on our [Github repositories](https://github.com/CounterpartyXCP), as well as development-level discussion in our [#dev channel](http://slack.counterparty.io).