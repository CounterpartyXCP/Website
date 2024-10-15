---
title: "Counterparty: On scalability and the future"
excerpt: >-
  Since its inception, Counterparty has functioned as a “metalayer” on Bitcoin, enabling functionality that Bitcoin could not perform on its own. Until recently, Counterparty and Bitcoin technology worked well together to provide this valuable functionality quickly, simply and at a low cost to a growing user base. The recent strife in the Bitcoin space —
categories: ["News"]
tags: []
author: Robby Dermody
date: 2017-03-27T14:58:44+00:00
status: published
slug: counterparty-on-scalability-and-the-future
---

Since its inception, Counterparty has functioned as a “metalayer” on Bitcoin, enabling functionality that Bitcoin could not perform on its own. Until recently, Counterparty and Bitcoin technology worked well together to provide this valuable functionality quickly, simply and at a low cost to a growing user base. The recent strife in the Bitcoin space -- beyond being frustrating to us at Counterparty as longtime Bitcoin enthusiasts -- has led us to make certain plans and take certain actions that will ensure Counterparty continues as a viable platform well into the future.

On Bitcoin Core vs Unlimited/Classic
------------------------------------

 For the time being, Counterparty currently plans to continue running Bitcoin Core. If an economic and/or hashpower majority decides another path for Bitcoin, we are open to switching to that different implementation. **We want to emphasize that our biggest priority with Counterparty is that it is as usable and reliable as possible.** To us, this means relatively cheap transactions, relatively fast confirmation times, and usage of a Bitcoin client that doesn’t crash or have showstopping bugs. With the current situation, there is not a perfect answer due to the number of factors that one must take into account both of a technical nature and otherwise. It is disappointing to us to see the increasing levels of toxicity in the Bitcoin ecosystem, however we still believe in Bitcoin and feel that it will live on even if it is as two separate networks. With whatever happens, we will not be maintaining two separate Counterparty networks, ever, but we keep the option open to switch from one to another if we can form a rough consensus in our community and we believe it is in the best interests of Counterparty users and developers. If, after consulting the community, developers and others, Counterparty does decide to move off of Bitcoin Core, our primary technological approach (known as “embedded consensus”) gives us the ability to work with virtually any Bitcoin-derived blockchain:

- If we decide to move before a fork happens, the process is rather simple. We will release a new version of Counterparty utilizing the new Bitcoin client, and users must switch to this new Bitcoin client as well as the updated Counterparty version before the specific Bitcoin fork occurs.
- If, however, we make this move after a Bitcoin fork has already happened, we would essentially “freeze” balances at a certain specific block and transition to the new chain as of another specific block. There would be some downtime, but the process would be announced well in advance with clear instructions provided for everyone.

 Note that we currently do not forecast either of these to be necessary given the scaling plans we detail below.

On fees and scaling
-------------------

 As of late, Bitcoin users have been increasingly experiencing higher transaction fees and longer confirmation times. As Counterparty is an on-chain protocol and all Counterparty transactions are Bitcoin transactions, these issues have also affected Counterparty. The Counterparty team is currently working on the following improvements that will go far to mitigate the impact of these issues:

#### CIP9: Enhanced send

 The draft of Counterparty Improvement Proposal (CIP) 9 is [nearing completion](https://github.com/CounterpartyXCP/cips/blob/master/cip-0009.md). Once the CIP is implemented in code, the Counterparty send operation will be upgraded to be smaller and more efficient. As a result, **fees for most types of asset sending operations should be reduced by 40-45%. We are calling this “enhanced send”**. We currently anticipate CIP9 to be implemented and released near the end of June. Stay tuned for a possible bounty announcement that will allow community members to donate to the implementation effort.

#### CIP9 multi-destination support

 After the basic enhanced send implementation is released, we will begin planning and work on a further enhancement that will allow for a single enhanced send operation to specify multiple destinations (and possibly even multiple assets). Thus, instead of requiring a separate Bitcoin transaction for each send, **a single send transaction can send to tens, hundreds, or even thousands of destinations at once**. We hope to see multi-destination send support coming to Counterparty in July or August.

#### Enhanced data encoding with CIP6

[CIP6](https://github.com/CounterpartyXCP/cips/blob/master/cip-0006.md) is another future enhancement we are looking to implement this year that will complement our current multisig encoding method, and allow a different (and oftentimes cheaper) approach to encoding data into the blockchain. For the technically inclined, Counterparty contributor Devon Weller has created a [nice document](https://docs.google.com/document/d/1yWi4ivapU5D0SwXj0NO1AP8KBmsKiYtQuvafTXMT5BQ/edit#) that outlines these various methods, and looks at how transaction costs are affected with each one.

#### Picopayments

 Picopayments is full fledged payment channels solution for Counterparty. It not only includes enhancements in the core counterparty-lib code, but a full fledged multi-asset payment hub implementation and command line interface. Picopayments will allow fast and very cheap off-chain sending of any Counterparty asset. This allows for [numerous exciting use cases](http://counterparty.local/docs/paymentchannels-lightning-faq/). Storj team member Fabian Barkhau has authored picopayments, and **we are pleased to announce that Fabian will be joining the Counterparty team as the Picopayments maintainer shortly**. Despite the news that Storj will be moving to Ethereum for their token (largely due to issues with Bitcoin), Fabian will continue working on Picopayments to allow it to be useful for all Counterparty users. Check out a video detailing how picopayments works [here](https://www.youtube.com/watch?v=smUCDG97b0s).

#### Wallet improvements

 Counterwallet will soon be enhanced to give users more fine-grained control over the setting of transaction priority/fees. Segwit support in Counterwallet is also on the roadmap, with an implementation coming if Counterparty is clearly to remain on Core.

#### Future technology

 To summarize, CIP6 and CIP9 allow for more optimized on-chain transactions, while Picopayments allows for fast, cheap off-chain send transactions of any asset. Beyond this, we are looking into:

- Enhancing our Picopayments solution with Lightning Network functionality to allow flexible payment routing across payment hubs.
- Possibly moving Counterparty to a sidechain, which will have quicker block times, cheaper fees, and be pegged to the Bitcoin blockchain.

 As both Lightning Networks and sidechains are still under development, these are mid to long term goals. (And also note that any change to a non-Core blockchain could yield improvements with the speed and cost of Counterparty transactions as well, if that route is ever taken.)

Conclusion
----------

 While the recent changes with Bitcoin have negatively affected Counterparty, we hope the above helps to show what we are doing to address these issues. Counterparty is both the original and most popular asset creation platform, and our goal is to keep it that way. We thank the Counterparty community for their continued support!