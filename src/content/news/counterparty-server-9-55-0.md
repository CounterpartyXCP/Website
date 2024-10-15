---
title: "counterparty-server 9.55.0 Released – Please upgrade!"
excerpt: >-
  Earlier this week Counterparty released a major new update for its reference client software. The new version of counterparty-lib, 9.55.0, brings numerous enhancements such as P2SH support, Docker builds, several protocol-level updates, as well as dozens of bug fixes. The included P2SH capabilities enable support in Counterparty for multisig addresses (which start with a ‘3’),
categories: ["News"]
tags: []
author: Robby Dermody
date: 2016-07-14T21:26:35+00:00
status: published
slug: counterparty-server-9-55-0
---

Earlier this week Counterparty released a major new update for its reference client software. The new version of counterparty-lib, 9.55.0, brings numerous enhancements such as **P2SH support, Docker builds, several protocol-level updates, as well as dozens of bug fixes**. The included P2SH capabilities enable support in Counterparty for multisig addresses (which start with a ‘3’), as well as opening the door to the release of payment channels (micropayments) and Lightning Network capabilities.

**If you are running counterparty-server, please update to this new version ASAP. The protocol changes will take effect at block 423888 (around August 4) and your software must be updated by that time.**

The full Changelog can be found [here](http://counterparty.us9.list-manage1.com/track/click?u=670b494916e05d6d2cfaa5206&id=11a688880f&e=63fbacaeb8) on GitHub. A formal announcement will be forthcoming. If you have any questions or issues updating, please join our [Slack chat](http://counterparty.us9.list-manage.com/track/click?u=670b494916e05d6d2cfaa5206&id=c6ae8f3dfb&e=63fbacaeb8) and ask in #dev or #support.

And, if you'd like a more straight-forward way of installing Counterparty-lib on Linux, Windows and OS X, feel free to check out [our new Docker-based build system](http://counterparty.us9.list-manage.com/track/click?u=670b494916e05d6d2cfaa5206&id=a05728e490&e=63fbacaeb8). We are looking for folks to help test it and report any issues.