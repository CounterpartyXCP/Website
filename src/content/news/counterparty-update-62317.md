---
title: "Counterparty Update 6/23/17"
excerpt: >-
  Ecosystem Updates The Counterparty ecosystem has seen a lot of progress the past month. There has been a massive influx of new projects and updates of existing ones. Here’s a brief overview: XChain.io is nearing full release and will be replacing Blockscan as our primary block explorer. IndieSquare is also working on their 'Token Explorer',
categories: ["News"]
tags: []
author: Jeremy
date: 2017-06-23T20:36:20+00:00
status: published
slug: counterparty-update-62317
---

**Ecosystem Updates**
---------------------

The Counterparty ecosystem has seen a lot of progress the past month. There has been a massive influx of new projects and updates of existing ones. Here’s a brief overview:

[**XChain.io**](https://xchain.io) is nearing full release and will be replacing Blockscan as our primary block explorer. IndieSquare is also working on their '[Token Explorer](https://walletapp.indiesquare.me/explorer/)', currently in [beta](https://blog.indiesquare.me/token-explorer-beta-release-9432025a537d).

[**Counterwallet.io**](https://counterwallet.io) has added support for subassets on both mainnet and testnet. To try it out, you must 1) own a regular named asset, 2) hold 0.25 XCP to cover issuance fee, and 3) have some BTC to cover a regular transaction fee.

[**FreeWallet.io**](https://freewallet.io) has also added support for subassets. FreeWallet is a free open-source mobile wallet which supports Bitcoin and Counterparty, and runs on any iOS or Android devices. Please note that FreeWallet.io is not related in any way to any of the the freewallet.org wallets.

[**RarePepe.Party**](http://rarepepe.party) is currently in closed beta testing for booster pack sales.

[**RarePepeWallet.com**](https://rarepepewallet.com) continues to see tremendous traffic as the rare pepe token adventure continues.

[**Coval.cc**](https://coval.cc) recently migrated to the Counterparty platform. COVAL’s initial projects utilize the new subasset format.

[**FootballCoin.io**](https://www.footballcoin.io/) is a Football Manager game with collectible cards. It even features its own wallet based off of Counterwallet.

[**Spacepirate.io**](https://spacepirate.io/) - SpacePirate: Age of Rust is a multiplayer sci-fi fantasy role playing game. It’s currently holding an ICO.

[**FoldingCoin.net**](http://foldingcoin.net/) - FoldingCoin will begin to update the progress of development using a public Trello. This will allow the community to see the progress live as it happens.

[**Token.Games**](https://token.games/) is a decentralized, fantasy sports games on the bitcoin blockchain.

We would like to remind you to keep your XCP and assets safe. With the recent price surge in XCP and several Counterparty projects, you would be wise to consider how much to keep on any of the exchanges. As a general rule, wallets where you control the private keys are much safer than centralized exchanges.

**Developer Updates**
---------------------

The Counterparty developers are actively working on improving the protocol, with the main focus being reducing transaction fees. Since Counterparty stores data in regular bitcoin transactions, we can gain a lot by encoding data more efficiently. Exactly how this is achieved is highly technical, but those interested can read the Counterparty Improvement Proposals (CIPs) at <https://github.com/CounterpartyXCP/cips>

To address rising transaction fees, development is underway for more efficient encoding of Counterparty data ([CIP11](https://github.com/CounterpartyXCP/cips/blob/master/cip-0011.md)). More advanced send types are also under development like ([CIP9](https://github.com/CounterpartyXCP/cips/blob/master/cip-0009.md)) which will significantly reduce the fees you need to pay by 40-45%. To ease the integration of Counterparty to exchanges, optional text memos can be added to transactions ([CIP12](https://github.com/CounterpartyXCP/cips/blob/master/cip-0012.md)). Projects that today need to make several transactions will soon be able to group them all together for significantly lower fees ([CIP10](https://github.com/chiguireitor/cips/blob/master/cip-0010.md) &amp; [CIP13](https://github.com/deweller/cips/blob/cip-13-mcat/cip-0013.md)).

A donation page has recently been added to the counterparty.io website and can be found [here](http://counterparty.local/donate/). This page will be kept up to date with a list of CIPs and the bounty and development status for each CIP. In addition this page lists off notable community members who contribute on an ongoing basis through their development efforts and dedication to the counterparty community.

Counterparty is a community funded project and progresses solely through the generous time and monetary donations of others. Please consider donating to the general fund, any active bounties, or directly to community members listed at <http://counterparty.local/donate/>.

**Proof-of-Concept VM**
-----------------------

John Villar, Community Director and lead developer of RarePepe.Party has been working on a Counterparty specific VM (Virtual Machine), with the goal to create a very stable, and safe smart contracts platform for Counterparty. More information can be found on our forum at <https://counterpartytalk.org/t/proof-of-concept-vm-development/3031>.

**Instant Lottery**
-------------------

JP Janssen, Community Director, has suggested building an XCP Lottery into the Counterparty protocol. It will make a fair game available with up to 1000x payout. More information can be found at <https://counterpartytalk.org/t/cip-draft-instant-lottery/3020>

**Robby's Departure**
---------------------

Robby Dermody, one of the three Counterparty Founders, was married a few weeks ago and will be taking a break from day-to-day involvement in crypto projects for a while in order to slow down a bit and focus on the simpler things, like a small farm and a child or two. You can read Robby’s full statement at <https://gist.github.com/robby-dermody/96afaff21791e7a66ae55475beaad64c>

Robby has also donated 2,500 XCP to the Counterparty general development fund, and hopes that his donation paired with our new CIP bounty process – will help development continue on for the foreseeable future.

The foundation and community wish him the best, and we give a heartfelt thank-you for this amazing project he helped start. The door will always be open for his return.

There will be a fifth elected seat in the next election. Discussion on the transition is ongoing in terms of Robby’s replacement. Devon Weller will be replacing Robby as a project maintainer on github along with Ruben Devries.