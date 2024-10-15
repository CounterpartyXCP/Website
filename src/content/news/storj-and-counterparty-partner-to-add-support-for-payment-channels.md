---
title: "Storj and Counterparty partner to add support for payment channels"
excerpt: >-
  Payment channel technology powers the upcoming Lightning Network and enables low-cost, almost instantaneous Bitcoin micropayments. Earlier this year, Storj developed a proof of concept to utilize such technology with Counterparty tokens. According to Shawn Wilkinson, CEO of Storj, “Payment channels allow for instant, ‘streaming’ payments of SJCX, which is a Counterparty token, in exchange for
categories: ["News"]
tags: []
author: Jeremy
date: 2016-07-12T16:06:46+00:00
status: published
slug: storj-and-counterparty-partner-to-add-support-for-payment-channels
---

Payment channel technology powers the upcoming Lightning Network and enables low-cost, almost instantaneous Bitcoin micropayments. Earlier this year, Storj developed a proof of concept to utilize such technology with Counterparty tokens. According to Shawn Wilkinson, CEO of Storj, “Payment channels allow for instant, ‘streaming’ payments of SJCX, which is a Counterparty token, in exchange for storage space on our network.”

The project, codenamed _picopayments_, was [developed](https://github.com/F483/picopayments) by Storj developer Fabian Barkhau. Last month, Barkhau and Counterparty lead developer Ruben De Vries began collaborating to develop this code as an addition to [_counterparty-lib_](https://github.com/CounterpartyXCP/counterparty-lib), the Counterparty reference client. [The project](https://github.com/CounterpartyXCP/counterparty-lib/pull/901) is nearing completion, requiring only further testing and final review.

This development is a first, crucial step toward Counterparty’s stated goal of enabling bidirectional micropayments for Counterparty assets in exchange for Bitcoin or other Counterparty assets. Such payments, while eventually settled on the Bitcoin blockchain, will not be subject to Bitcoin’s ten minute block time while being transacted.

Besides Storj, other Counterparty-based projects have plans to explore the technology. “Micropayments technology can be a huge benefit to us, allowing us to create new features not possible before,” said Shaban Shaame, CEO of Everdreamsoft, makers of the popular [Spells of Genesis](http://www.spellsofgenesis.com/) game.

The code will be merged within the next month and will see extensive testing on the Bitcoin testnet before being enabled on the Bitcoin mainnet. Its current state will allow for unidirectional payment channels, where Storj and other Counterparty users can “stream” payments in SJCX or another asset to other users. Storj plans to beta test this technology during the third quarter of this year, according to Wilkinson.

Following this, Counterparty will make protocol updates to enable the use of bidirectional micropayments, where two parties may swap one asset for another. These changes will lay the groundwork for the upcoming [Lightning Network](https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791).

“We’re excited about this development,” said De Vries, “and appreciate the initiative Storj took here. This is a huge step forward that will truly allow for rapid, almost frictionless Counterparty token payments, as well as eventual use of Counterparty tokens on the Lightning Network.”

In advancing its overall mission to expand the power and potential of Bitcoin, Counterparty encourages [both developers and non-developers](http://counterparty.local/working-with-us/) to get involved and help out, and has created a [payment channels FAQ](http://counterparty.local/docs/paymentchannels-lightning-faq/), as well as enhancing [the general Counterparty FAQ](http://counterparty.local/docs/faq/). The Counterparty team can be reached on its [official Slack chat](http://slack.counterparty.io), the Storj team may be reached via its [Slack chat](http://slack.storj.io).