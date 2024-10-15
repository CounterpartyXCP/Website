---
title: "Counterparty development update"
excerpt: >-
  Due to several important new changes, we're releasing a development update independently this week. Transaction fee improvements When composing a new Counterparty transaction, counterparty-lib must select which Bitcoin unspent outputs (UTXOs) to use as inputs for the transaction in order to pay the miners’ fees.  We released a hotfix earlier this week to the current 9.52.2
categories: ["News"]
tags: []
author: Robby Dermody
date: 2017-05-18T12:32:59+00:00
status: published
slug: counterparty-development-update-20170518
---

Due to several important new changes, we're releasing a development update independently this week.

**Transaction fee improvements**
--------------------------------

When composing a new Counterparty transaction, counterparty-lib must select which Bitcoin unspent outputs (UTXOs) to use as inputs for the transaction in order to pay the miners’ fees. We released a [hotfix](https://github.com/CounterpartyXCP/counterparty-lib/pull/970/files) earlier this week to the current 9.52.2 that modifies this UTXO selection algorithm so it will avoid picking very small (dust) UTXOs that will bloat the transaction and increase fees.**This should significantly reduce fees incurred when making Counterparty transactions in cases where there are many such dust outputs**, which would be the case for addresses that have received numerous counterparty transactions (such as Exchange deposit addresses, users that send or trade many assets, and so on).Please feel free to try it out by pulling the newest counterparty-lib code from master, or, if using fednode, running the command:

```
fednode update counterparty counterparty-testnet
```

### **Subassets support in Counterwallet**

Preliminary Subassets support has been pushed to the develop branches of [Counterwallet](https://github.com/CounterpartyXCP/counterwallet/commits/develop) and [Counterblock](https://github.com/CounterpartyXCP/counterblock/commits/develop) earlier in the week, and [wallet.counterwallet.io](https://wallet.counterwallet.io) has been updated to run it once the feature is live on mainnet. With this code, users can create subassets, trade them, and use them as they would use any other asset.<span style="text-decoration: underline;">**Subassets are currently live on testnet only, and will be live on mainnet around May 20, so if you haven’t updated to counterparty-lib 5.52.2 yet, please do so ASAP!**</span>To try this all out on testnet, visit <https://wallet-testnet.counterwallet.io> (to create a testnet subasset, you'll need to get some testnet BTC and burn it to create XCP, which can be done through Counterwallet). If you own an asset at a certain testnet address, you can make a subasset at that address. Also, the exchange interface supports subassets -- for example, try searching for “TESTPARENT.” in the “Token 1” text field under “Select Another Pair” on the Exchange page.This Counterwallet update also includes a revamped caching system that should make the interface a bit faster and more reliable, as well as reparsing speed improvements. **CIP 9, 10, and 11**

---

Implementation on CIP 9 and 11 will soon begin. To recap, CIP 9 will create a new send message that is smaller and more efficient, and **should reduce the cost of sending Counterparty assets by** [**around 40-45%**](http://counterparty.local/news/counterparty-on-scalability-and-the-future/)**, as well as adding a new “memo” field that can be used to specify a description of the transaction, such as an exchange payment ID**.We will soon be drafting out CIP 11 as well, which will allow memo field usage to be required for sending to addresses which signal this requirement. The main use of CIP 9 and 11 together will be exchanges, who will be able to massively streamline their Counterparty deposit and withdrawal processes, which (we think) will **drastically reduce support headaches, delays, and the fees they pass on to their users**.We are still aiming for a CIP 9 and 11 release sometime in mid/late June.**New block explorers**

---

In the wake of the closing of blockscan.com, we are pleased to announce the development of two new block explorers, [xchain.io](http://xchain.io) (developed by Jeremy Johnson, a.k.a. jdog) and [Token Explorer](https://blog.indiesquare.me/token-explorer-beta-release-9432025a537d) (developed by Inqiesquare). We are very pleased to see these new block explorers, which (especially with xchain.io) will replace the use of blockscan.com. As it is, all blockscan.com links in Counterwallet have been replaced with the corresponding xchain.io links.Jdog has also released [counterparty2mysql](https://github.com/jdogresorg/counterparty2mysql), a nifty script to convert the Counterparty sqlite database into a mysql database, which he uses with xchain.io.