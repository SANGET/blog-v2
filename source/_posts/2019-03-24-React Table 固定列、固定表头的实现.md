---
author: Alex
date: 2019-03-24
layout: post
title: React Table 固定列、固定表头的实现
permalink: /react-table
keywords: React Table, Table 固定列, Table 固定表头
tags: 
  - 技术
---

> 这几天在研究如何实现表格的固定列（fixed column）功能，这里记录了思路和细节
> 表格控件比较复杂，应用场景也很多，各种数据展示、统计、操作，管理应用常用的组件之一。

### [Ukelli-UI Table][ukelli-table] 是为了应对以下应用场景：

1. 友好的展示数据
2. 友好的数据交互
3. 友好的开发体验
4. 业务逻辑和 UI 分离

### 期望效果

1. 固定表头
2. 左右各有一个固定的列
3. 自动计算表格 cell 的宽度和高度，并且不能超过一定的长度，并且表头需要和表体同步宽度，不需要在配置中传入 UI 相关的宽度信息

### 实现细节

1. 分为 3 个表格
    1. mainTable 主体表格
    2. leftFixedTable 左边的固定列表格
    3. rightFixedTable 右边固定列表格
2. 监听 mainTable 和 fixedTable 的 scroll 事件，同步所有的表格的列的显示区域
3. 向所有的行（ row）元素 tr 监听 mouseenter 事件，确保鼠标移过对应的行所有的表格都有一致的表现
4. 记录第一列的所有的格子 （ td ）的高度信息，用于给固定表格的格子高度
5. 记录第一行的格子的宽度信息，给 TableHeader 同步 TableBody 的宽度信息

目前主流的 Table 组件都需要设置列的宽度，最开始 ukelli-ui 的表格控件也是如此实现的，但是后面发现这样有两个问题

1. 定义渲染配置的时候需要额外的 UI 的信息，即 width，这样不够纯粹
2. 在开发的时候需要花很多精力在格子宽度上，要做到每一个表头都不会过长而换行，影响排版

参考 [https://ui.ukelli.com/#/Table][ukelli-table]

[ukelli-table]:https://ui.ukelli.com/#/Table