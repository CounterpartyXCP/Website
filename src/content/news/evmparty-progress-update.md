---
title: "EVMParty Progress Update"
excerpt: >-
  – Ruben De Vries 2.5 weeks ago we announced our plans to work towards the launch of the EVM running on Counterparty. Today I'm writing an update on the progress that has been made so far and an attempt to outline the roadmap/timeline for the rest of the work. Test Coverage For a while now all
categories: ["News"]
tags: []
author: Jeremy
date: 2016-06-08T09:05:14+00:00
status: published
slug: evmparty-progress-update
---

- Ruben De Vries

2.5 weeks ago we announced our plans to work towards the launch of the EVM running on Counterparty.

Today I'm writing an update on the progress that has been made so far and an attempt to outline the roadmap/timeline for the rest of the work.

## **Test Coverage**

For a while now all the unittests for the contracts (taken from the ethereum codebase) are all passing, what remains is test coverage for the deeper level underlying code to make sure some underlying piece of code doesn't contain a bug (or we won't introduce bugs into it in the future). There's a fair chance bugs in that code could still keep the contracts functioning for 99.999% but have some edge case where a bug might pop up.

This is priority #1 at the moment, because once the unittests are added it will make sure there's no regression when continuing with other changes.

If you want to see the tests running and pass; checkout the evmparty branch of my repo [here](https://github.com/rubensayshi/counterparty-lib/tree/evmparty).

## **Code Review**

The amount of code required for the EVM and to hook it into the Counterparty system is quite a bit, at the moment I've already begun chopping up the changes into chunks that are easier to review by other devs. Unfortunately this actually takes quite a bit of time to chop it up, and even then reviewing will not be a light task.

I've opened up initial 4 pull requests already of the first chunks:

-   [https://github.com/CounterpartyXCP/counterparty-lib/pull/878](https://github.com/CounterpartyXCP/counterparty-lib/pull/878) - small changes to be able to update the hardcoded checkpoints in the codebase.
-   [https://github.com/CounterpartyXCP/counterparty-lib/pull/879](https://github.com/CounterpartyXCP/counterparty-lib/pull/879) - removing the old testnet-only implentation.
-   [https://github.com/CounterpartyXCP/counterparty-lib/pull/881](https://github.com/CounterpartyXCP/counterparty-lib/pull/881) - importing the untouched pyethereum code.
-   [https://github.com/CounterpartyXCP/counterparty-lib/pull/882](https://github.com/CounterpartyXCP/counterparty-lib/pull/882) - removing everything from the pyethereum code that we don't need (mining, bloom filters, etc).

Once each chunk is reviewed, we'll merge it into the develop-evm branch so we know it's been reviewed and we can continue on top of it.

## **Adding back the Counterparty Protocol Messages**

To make reviewing easier I've completely ripped out the old code first, and now I've added it back in.

This had already essentially been implemented in the [original EVM release](http://counterparty.local/news/counterparty-recreates-ethereums-smart-contract-platform-on-bitcoin/), and I could copy paste 90% of that and reuse it.

It's already possible to start running a contract on Counterparty testnet with the current code!

## **Counterparty Assets in Smart Contracts**

The biggest task left and something that imo makes a big difference between the EVM on Ethereum or Counterparty is making the contracts work with more than just the native currency (ETH and XCP respectively).

With this change every contract can use Counterparty Assets for receiving and sending and gives all the contracts a standardized way of dealing with tokens/assets instead of requiring more smart contracts to bind contracts together.

## **Gas cost for executing Smart Contracts**

The discussion on what to use for gas cost for executing smart contracts is still ongoing, but regardless of the outcome it will require some (or a lot, depending on the choices) of development work to implement it.

It looks like it will most likely be XCP burning, but there needs to be a good formula to determine the cost. We’ll be working with some other people to help there.

## **Testing / Benchmarking**

Last but not least we need to thoroughly test contracts (community effort) and benchmark how fast our implementation runs and what limits we need in place to prevent DoS attacks on nodes.

## **Some More Things To Discuss**

-   What to do when an execute is mined before a publish?

## **Other things going on**

In the meantime there's still a few other things keeping the team:

-   creating docs and a demo for P2SH.
-   making it possible to run a Counterparty node without processing 0 confirmation transactions, because about 80% of the memory and CPU required to run a node is used for this, without it people can run a node on a small VPS easily.
-   Redoing the federated node build system to be built on Docker and Docker Compose.
-   Moving and consolidating our IT infrastructure.

Feel free to contribute to our discussion and work on the EVM and everything else by joining [our slack chat](http://slack.counterparty.io) (#dev and #evmparty) and posting on [our forums](http://counterpartytalk.org).