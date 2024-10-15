---
title: "Outage and error handling improvements"
excerpt: >-
  Earlier today the Counterparty network experienced an outage due to a protocol-level bug. Upon being alerted to the problem due to a combination of machine level alerts and Slack chat messages, our development team got to work debugging and fixing the issue. As a result, earlier we pushed a required new version of counterparty-lib (9.54.0)
categories: ["News"]
tags: []
author: Robby Dermody
date: 2016-03-06T04:47:27+00:00
status: published
slug: outage-and-error-handling-improvements
---

Earlier today the Counterparty network experienced an outage due to a protocol-level bug. Upon being alerted to the problem due to a combination of machine level alerts and Slack chat messages, our development team got to work debugging and fixing the issue. As a result, earlier we pushed a required new version of counterparty-lib ([9.54.0](https://github.com/CounterpartyXCP/counterparty-lib/releases/tag/v9.54.0)) to address the underlying cause.

Outages like these are thankfully quite rare with Counterparty. Nonetheless, our experience with this outage caused us to examine how protocol-level bugs are handled, and to come up with a potential improvement that will effectively bypass future exception-generating transactions instead of generating the exception and halting. As this is a consensus-impacting change, further testing is necessary, and we will keep the community updated as to progress as we vet out this new error handling code. Once vetted, this code going into production will allow for more flexibility and stability of Counterparty, especially as we embark on our plans to further enhance the protocol and add more features, such as sub-assets and P2SH multisig.

Thank you all for your support of Counterparty. If you have any questions, don’t hesitate to get in touch with us on the #dev channel on our [slack chat](http://slack.counterparty.io).