---
title: "Counterparty Community Hangout 12/2/17"
excerpt: "Last Saturday, Counterparty hosted a community hangout on Discord. The hangout was the first of many regularly scheduled voice-meetings to come wherein projects are welcome to discuss their own project updates, as well as join the community in an open discussion about developments to the Counterparty protocol and ecosystem."
categories: ["News"]
tags: ["Bitcoin", "counterparty hangout", "hangout", "XCP", "blockchain"]
author: Rebekah Moss
date: 2017-12-09T02:31:25+00:00
status: published
slug: counterparty-community-hangout-12-2-17
---

Last Saturday, Counterparty hosted a community hangout on Discord. Long overdue, the hangout was the first of many regularly scheduled voice-meetings to come wherein projects are welcome to discuss their own project updates, as well as join the community in an open discussion about developments to the Counterparty protocol and ecosystem.

The hangout proved a mighty success, heavily extending our typical 1-hour runtime to nearly two, as the community came together to discuss and share project updates. It was heart-warming to see developers sharing with one another in the true ethos of the Counterparty community and what was definitely highlighted, was this interconnectivity between so many projects in the ecosystem. We can only hope to see it build from here on out.

Below you'll find that you can access the audio from our hangout, but we've also provided a surmised transcript for those who prefer it. Please note, that the transcriptions are not word for word but rather, summaries of the talking points put across in the audio.

<iframe frameborder="no" height="300" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/366989939&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" width="100%"></iframe>

Important to note from Counterparty (as a result of the hangout), is that the external addrindex implementation indexd, is expected to go live in January, alongside news that the remaining **CIPs 6** and **10** are wrapping up for release in January for the development of **CIP 13.**

### Transcript

This time around, we were happily joined by Christian Moss from Mandel Duck who also represented Indiesquare and thereby Book of Orbs (from a developmental perspective), Killian from Age of Chains, Chris from Age of Rust developer Space Pirate Games, Folding Coin - as well as our on Devon Weller who contributed to the discussion on behalf of Tokenly and Counterparty and both Rebekah (CP community outreach) and Dante (Counterparty Foundation) lead the hangout (beginning at **[00:00:46]**).

Following the agenda - which following this hangout, we've decided to post in advance in future - for those who would like to ask questions either in the voice and/or text channels on discord - we opened with brief introductions.

**Mandel Duck [00:01:15]:** I've been using Counterparty in a few of my projects - mainly games, happy to be here.

**Killian from Age of Chains [00:02:05]:** (Describes the project as) a blockchain trading card video game based on counterparty.

**Devon Weller [00:02:42]:** working on Counterparty as a Core developer with Ruben - who is not on the call.

**Chris from Space Pirate games [00:03:04]:** developer for Age of Rust.

**[00:03:30]** [Dante unknowingly introduces Folding Coin 'House' who was having audio difficulties, but we introduce later on.]

**[00:03:46]** Following introductions, we lead with Counterparty development news, briefly addressing the Counterparty Lib update. As [mentioned](http://counterparty.local/news/counterparty-lib-9-55-4/), and reiterated by Devon in the hangout, the update addresses a bug that would cause the Counterparty server to stop working normally. Users are reminded to upgrade to version 9.55.4 as soon as possible. Details of the previous lib [9.55.3](http://counterparty.local/news/counterparty-lib-9-55-3-released/) were addressed in terms of the CIPS ([9](https://github.com/CounterpartyXCP/cips/blob/master/cip-0009.md), [11](https://github.com/CounterpartyXCP/cips/blob/master/cip-0011.md), [12](https://github.com/CounterpartyXCP/cips/blob/master/cip-0012.md)) that were implemented.

#### CIPS

We then move onto the progress of the current CIPs, as listed on the [Counterparty Donations page](http://counterparty.local/donate/) (and mentioned in the latest [Counterparty newsletter](http://counterparty.local/news/counterparty-newsletter-12-01-2017/).)

[CIP 6](https://github.com/CounterpartyXCP/cips/blob/master/cip-0006.md).

**Devon [00:05:06]:** CIP 6 is technically pending but is in development - (In Process).

**Mandel Duck [00:05:19]:** wants to clarify exactly what CIP 6 is.

**Devon [00:05:35]:** It's a way to encode a large batch of data in a single transaction in a more efficient way. So it'll be used by [CIP 10](https://github.com/chiguireitor/cips/blob/cip10/cip-0010.md).

**[CIP 10](https://github.com/chiguireitor/cips/blob/cip10/cip-0010.md)**

**Mandel Duck [00:05:48]:** Some of Ruben's Code from 2015 seems to mention MPMA.

**Dante [00:06:05]:** brings it up as a prerequisite to CIP 10 - to make MPMA possible.

**Devon [00:06:32]:** it's technically not required (CIP 10) but much more efficient.

**Mandel Duck [00:06:53]:** I imagine there is still an upper limit for the number of bytes...

**Devon [00:06:58]:** There is ...for every 500 bytes you have to add another transaction output. 500k if you're willing to pay the fees for it.

**Rebekah [00:07:37]:** CIP 10 is essentially a multi-send function allowing for batch transactions - aka quicker and a lot simpler (known as MPMA).

**Mandel Duck [00:08:10]:** [Spells of Genesis](https://github.com/chiguireitor/cips/blob/cip10/cip-0010.md) would utilize it alongside Folding coin (as mentioned in the newsletter).

[CIP 15](https://github.com/deweller/cips/blob/cip-15-segwit/cip-0015.md)

**Rebekah [00:09:01]:** CIP 15 whilst listed as collecting its bounty will most likely be released regardless of fulfillment.

**Dante [00:09:13]:** amends that bounties just facilitate and expedite CIPS with the community donations - clarifying Rebekah's use of term bounties.

CIP 15 otherwise known as Segwit support segues into a discussion on atomic swaps; a technology that could theoretically be aided by CIP 15 down the line (as mentioned in the audio).

**Mandel Duck [00:10:03]:** Counterparty fork chains are utilizing atomic swaps. Indiesquare's API is looking at it, it's not entirely reliant on Segwit but it does make it nicer.

**Dante [00:10:42]:** argues that Segwit will result in cheaper transaction fees by 40%.

**Mandel Duck [00:10:53]:** counters 30%. Because the signatures are taken out.

Dante then counters that this thus reduces the size of the transaction you're needing to pay for.

[CIP 13](https://github.com/deweller/cips/blob/04c62d1a9865bd0f0bb0251cc1eeffa56bbbbbba/cip-0013.md)

**Rebekah [00:12:38]:** upcoming CIP 13 [MCAT] - Multiparty Counterparty aggregate transactions - which would allow you to group your transactions with other counterparty users - making for significantly cheaper transactions.

**Devon [00:13:10]:** refers to CIP 13 as a gleam in the developer's eye but nonetheless, theoretically sound.

CIP 13 as discussed in the hangout, is described as, allowing pre-signed transactions to be held and bulked up on an aggregate server for scaling improvements. Devon theorizes that will be the cheapest transaction option on blockchain aside from lightning.

**Dante [00:14:07]:** poses a question. Instead of multiple people, would CIP 13 be possible with one person with multiple addresses with multiple assets - who would also want to make description changes to assets?

**Devon [00:15:39]:** said it would be an extension to CIP 13 as asset description changes aren't part of the current spec. Another posed extension would be an atomic swap within the same chain.

**Mandel Duck [00:16:14]:** says the issue with on chain atomic swaps isn't efficiency (though expensive), it's that It's more applicable to cross-chain transactions.

*-Expanding the conversation -*

**Mandel Duck [00:17:19]:** For instance, A Spells of Genesis MCAT node could be beneficial to allow trading with their users cheaply.

**[00:18:02]** The MCAT server can choose to receive any token. Spells of Genesis, for instance, would pay the Bitcoin fee, not the user.

**Devon [00:19:08]:** it would allow users to do sends without any Bitcoin just tokens.

**Mandel Duck [00:20:01]:** Devon do you have any thoughts on exactly what the on-transaction will get? the user will never pay with BTC. How much cheaper will the MCAT node be?

**[00:20:39]** ....Back when BTC was $1100 (with multisends) 1 penny per transactions, multiply by 10 now, 10 cents per transaction [approx].

**Devon [00:21:34]:** This was a rate of 32 satoshis per byte.

**Devon [00:25:52]:** CIP 6 and 10 lay the groundwork for CIP 13. John has pretty much wrapped up CIP 10, I'm close to finishing CIP 6. The Plan then, is to do a release with CIP 6 and CIP 10 - Announcing this month, and go live in January. After that the way is clear.

There are 2 big pieces to CIP 13. One is the Counterparty protocol change, allowing these transactions, and then somebody has to build a server that actually will aggregate these transactions and push them to the blockchain. That may be counterparty, that may be a third party that wants to do it, I don't know what that's going to look like yet.

#### External addrindex implementation indexd:

**Rebekah [00:27:01]:** The last bit of Counterparty news from the newsletter is that we'll be switching to using an external addrindex implementation indexd. Essentially, Counterparty would no longer have to run off a patched version of bitcoin software. This would allow us to be up to date with the latest bitcoin technology and updates and be a lot more consistent overall.

**Devon [00:27:33]:** highlights that a bitcoin 0.15.1 upgrade required for that. The goal is for this to go live in January (formally announcing in December).

**Mandel Duck [00:28:14]:** speculates whether this would help Bitcoin cash or Litecoin - would it make Counterparty more compatible with other chains?

### Projects

Beginning at [00:30:05] we start to discuss project updates, expanding on what was mentioned in this month's Counterparty newsletter.

#### [Sarutobi Island](http://mandelduck.com/sarutobiisland/)

**Mandel Duck [00:30:42]:** [Discussing Sarutobi Island] - Chapter 2 is going out soon. There will be a new chapter of the story, 3 more characters - which are counterparty tokens. The charity characters as mentioned in the newsletter can raise money by selling the tokens which are game items. The charities contacted Mandel Duck, interested in seeing if gaming and blockchain technology would be a useful model for fundraising.

**Mandel Duck [00:33:25]:** Chapter 2 is in testing; pending translations into Japanese this month.

Mandel Duck is also experimenting with picopayment channels for mini-games. Users can deposit tokens and send micro-transactions for free.

Picopayments, as described by Mandel Duck are payment channels for Counterparty - the idea being that you can send a token to another player if you are in the 'channel' and you can also send small amounts that are expensive to send 'on-chain'.

#### [Book of ORBs](http://bookoforbs.com/)

**[00:35:43]** Both Rebekah and Mandel Duck move onto Book of Orbs as they're jointly involved with the projects. They introduce the RBF (Replace by Fee) function as mentioned in the newsletter. Chris; who works with Indiesquare - who helped develop BOO, helped implement the RBF function, and Rebekah who dealt with customer service, explained she experienced a lot of stuck transaction inquiries.

**Mandel Duck [00:36:14]:** says this goes into the DEX and the Counterparty decentralized experience, that the Book of Orbs utilizes as the main feature. People don't want to pay a lot and want to speculate on the price so they set very low fees for transactions and the fees get stuck. So RBF lets them do it. If it gets stuck, they bump the fee up and try again. Users will use the DEX more and speculate more, without the risk of transactions getting stuck.

**Mandel Duck [00:37:18]:** Notes it's helpful to the users who use BOO as an entryway to cryptocurrency and end up stuck after using the custom fee.

**Mandel Duck [00:39:11]:** Providing an update on the BOO Web App - it is in testing and an open beta is imminent for mobile and desktop. This will come with a faster API and a leaderboard for the best collection - and the RBF. Book of ORB will also be the first app with RBF function and this will eventually be incorporated into the Android version. Users of the Android version are encouraged to use the web app until the Android version reflects it.

#### [Augmentors](https://www.augmentorsgame.com/)

**Devon [00:41:23]:** Augmentors contracted tokenly to do the blockchain development of their game. An early alpha in development (for testing in December as mentioned in the newsletter) and a functional thing with blockchain integration is due in March..

**Mandel Duck [00:42:37]:** wants to know the extent they're using the blockchain.

**Devon [00:43:09]:** Databits can be used in-game, Creatures will be tokenizable, but may not be Counterparty tokens due to the fees.

#### [Folding Coin](http://foldingcoin.net/)

**FoldingCoin [00:52:20]:** Is an open-source developer that created a web browser that helps get people set up for doing folding at home, and they can earnFoldingCoin and CureCoin for doing ['foldingathome'](http://folding.stanford.edu/)through Stanford university software. So we offer this reward in FoldingCoin, which is a Counterparty asset. Typically, new users will have an issue [wherein the get] FoldingCoin in their wallet and then they won't have any bitcoin, to be able to send any FoldingCoin to an exchange, to anyone else or, to a different wallet. So, going back to the improvements Counterparty is making - if users can send without having to have bitcoin in their wallet or go out and buy bitcoin to make a transaction, that would significantly help new users get into the space, and use the transactions easier - without a steep learning curve of how to go and buy BTC and that kind of thing.

Some of the other things are that we send out are a monthly distribution and it typically goes out to about a 1000 people. Lately, with the mempool being so saturated we've had to send out anywhere up to 50 satoshis per byte transactions. When you have pay 0.2 bitcoin it's starting to be expensive to make that distribution happen. So any of the multi-send type improvements that Counterparty's making - those will all help try and get those costs down.

**Dante [00:55:38]:** asks if folding is a form of mining.

**Folding Coin [00:56:13]:** The folding at home project is run through Stanford University, it's typically doing protein folding research, a lot of the time, they'll be doing cancer research and research for other diseases, they can simulate the proteins folding and be able to create medicines and other drug therapies based on seeing those simulations, and the white papers that come out of that are open source. There is a fair amount of mining that does happen.

**Dante [00:57:34]:** what is running? CPU? GPU?

**Folding Coin [00:57:46]:** It can use CPU, GPU with the advanced client. Typically the CPU folding can do protein simulations that are more complicated that you can't do with the GPU, but the GPU folding simulations are where the bulk of the work gets done. You can do a lot more with the GPU that you can't with the CPU and they do offer a chrome plug-in that is also doing CPU folding (for laptops and lower end computers).

**Dante [00:59:08]:** You receive FDLC tokens...they are tradable?

**Folding Coin:** Yes, on the Counterparty DEX, Bittrex, Poloniex.

**Dante:** So this has a liquid market?

#### [Age of Chains](https://www.ageofchains.com/)

**Age of Chains [01:02:35]:** Explains that their project development is a slow process but worthwhile process wherein they finance themselves through card sales. The card creation process is quite slow - AOC explains that it's an interaction between the project leads and the illustrators. Estimating that it takes roughly a month for each card to be released and with a goal of 300 cards for the main release, AOC says they have no firm date for a release.

Age of Chains also recently held a meet up in Frankfurt wherein they were able to introduce XCP to people who may not have previously known much about it.

Killian also notes that Age of Chains cards can already be used in Sarutobi Island and be traded in Book of Orbs.

#### [Spells of Genesis](https://spellsofgenesis.com/)

**[01:21:39]** Brief Spells of Genesis news highlights the new Blockchainization feature where 3 cards per month can be blockchainized. This follows a discussion about Spells of Genesis' previously divisible cards (available in the audio).

#### [Age of Rust](https://www.ageofrust.games/)

Age of Rust: We go over the newsletter highlights regarding the new hire and the ability to trade cards for Rustbits in Book of Orbs. Age of Rust is ready to head into a beta release by the end of December.

**Age of Rust [01:22:59]:** is kind of like "Mist meets Ready Player One, with bitcoin" so it's kind of a game where you go around solving puzzles and earn rewards in cryptocurrency. This upcoming version for us has a blockchain tokens enabled so you'll be able to use not only our cards, but we'll be including some Spells of Genesis cards in play as well, so you'll be able to use some of those cards to progress in the game and earns tokens cards and things like that on the counterparty blockchain.

Right now we have 10 cards that show up in Book of Orbs.

**Dante [01:25:04]:** When you say Spells of Genesis cards are you also going to include the use of Bitcrystals in any way?

**Age of Rust [01:25:11]:** Bitcrystals is in the game as a reward. If you solve a puzzle inside the game, you'll be able to claim Bitcrystals. We're using Bitcrystals as a reward, not necessarily as a currency inside the game.

**Dante [01:25:36]:** This game uses certain cards, and those cards whether they're SOG cards or AOR cards, you're linking those cards to your game instance, [are these cards] giving the users some kind of advantage?

**Age of Rust [01:26:11]:** If you register your wallet with the game, let's say you have SOG cards and AOR cards in your wallets - yeah you can, there are elements of the gameplay we've coded in that way if you. The gameplay, your game experience, might differ depending on the card that you have in your counterparty wallet.

**Dante [01:26:52]:** I don't think I've ever heard of that being implemented by anyone where the actual game experience is changed by your ownership of different cards.

**Age of Rust [01:27:06]:** in one area the game, the players who don't have specific cards...the game area will actually look different depending on what you hold in your counterparty wallet.

**Dante [01:27:41]:** would that be something that would be apparent (to the user)?

**Age of Rust [01:28:13]:** We tip off the player through some clues and some hints that they need more game items.

**Age of Rust [01:28:49]:** We may end up giving them a not so subtle clue or a very difficult clue.

**Age of Rust [01:29:53]:** It is a network-style game

**Age of Rust [01:30:01]:** It is multiplayer in the way that players can work together to solve puzzles.

**Dante [01:41:03]:** later returned to Age of Rust with a question - will there be multi-address support as prior to our previous suggestion (in the audio).

Age of Rust responded that it is a matter of UI development but had been something they were thinking about in terms of multi-wallet support.

#### [IndieSquare](https://indiesquare.me/)

**Mandel Duck [01:33:43]:** Talking about IndieSquare Software Developer Kits - Indiesquare is a counterparty enabled wallet but they also offer API services and SDK (Software developer kits) to make it easier to add counterparty to your apps. Coming out soon to all major platforms and iPhone, with a node, javascript library and unity library. The Unity library makes it easier to link wallets and do the address verifications for games built with unity.

**Mandel Duck [01:38:09]:** Indiesquare is just Counterparty but just a mobile app version really (in reference to it being open-source).

We briefly go over the rest of the newsletter and the projects not present in the hangout. You can read about the latest updates on Freewallet. Rarepepewallet. Rarepepe.party. Blocksafe and Coval [here.](http://counterparty.local/news/counterparty-newsletter-12-01-2017/)

Wrapping up a successful hangout, we plan to hold community hangouts each month following the publication of our monthly newsletter! Please let us know what you'd like to see from future hangouts!

Follow our social accounts and join our [Discord](https://discord.gg/pVvh4TV) server for more details later on!

Follow Counterparty on [Facebook](https://www.facebook.com/CounterpartyXCP/) or [Twitter](https://twitter.com/CounterpartyXCP)!

Stay up to date with real-time conversation on Telegram! [@Counterparty\_XCP](https://t.me/Counterparty_XCP)

If you have a project that utilizes the Counterparty protocol that you'd like to let us know about, please email <projects@counterparty.io>.