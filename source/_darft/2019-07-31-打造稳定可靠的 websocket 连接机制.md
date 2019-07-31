---
author: Alex
date: 2019-07-31
layout: post
title: 打造稳定可靠的 websocket 连接机制
keywords: 可靠的 websocket, 稳定的 websocket
permalink: /build-stable-websocket-connection
tags: 
  - 技术
  - 前端
---

## websocket 连接在移动端并不可靠



`websocket` 的 `onclose` 和 `onerr` 并不可靠，特别在移动端，当浏览器被退到后台运行时，即使`断开`了也未必触发 `onclose` 或 `onerr` 回调。

那如何保证 websocket 正确地、持续与服务端连接？

## 主动断开

在页面激活状态下，websocket 是比较可靠的，但是在不激活页面下就不一定了，所以可以监听 `document` 的 `visibilitychange ` 事件，在 `document.hidden === ture` 的时候主动断开 websocket，页面再次激活时，重新连接并且做一系列应用启动需要的操作。

这样可以主动确保 websocket 的正确连接，不需要设置和维护复杂繁琐的连接条件