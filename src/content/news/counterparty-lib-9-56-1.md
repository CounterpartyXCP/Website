---
title: "counterparty-lib 9.56.1 released!"
excerpt: >-
  Today counterparty releases version 9.56.1 which includes a hotfix for an uncaught exception which would cause a Counterparty server to stop operating normally. All users are encouraged to upgrade as soon as possible. Upgrade Procedure For those running a federated node with no front-end: fednode update counterparty counterparty-testnet then fednode rebuild counterparty counterparty-testnet For standalone
categories: ["News"]
tags: []
author: Jeremy
date: 2019-02-14T16:40:32+00:00
status: published
slug: counterparty-lib-9-56-1
---

Today counterparty releases version 9.56.1 which includes a hotfix for an uncaught exception which would cause a Counterparty server to stop operating normally. All users are encouraged to upgrade as soon as possible.

Upgrade Procedure
-----------------

 For those running a federated node with no front-end: `fednode update counterparty counterparty-testnet` then `fednode rebuild counterparty counterparty-testnet` For standalone / manual installations: `pip install --upgrade counterparty-lib==9.56.1`