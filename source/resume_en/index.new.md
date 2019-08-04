---
author: Alex
nav-menu: false
---

<!-- - [English version](/resume_en) -->

<!-- -------- -->

## 个人简介

I am Alex, who is a Frontend engineer, working on Frontend related for six years. The main work in the pass was: Construction, planning and application of `UI lib`; Construction and application of `Web admin dashboard Framework`; Front-end project quality control and team coordination.

Like to explore the pinciple of how things work, like to `read`、`sport`、`photography`、`playing guitar`、`coding`。

- [More info](/about)
- [Download as PDF](/assets/other/resume.pdf)

--------

## Skill

- Frontend: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`
- Backend: `Node`
- Deployment: `Docker`, `Kubernetes`, `Netily`
- Using Tools: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

--------

## Work experience

### Synergy88

- 公司简介：toB 综合技术提供商。
- 主营业务：商业系统研发、游戏研发与 API 接入、IM 服务。

> 2015.02 - 至今

- 职位：前端负责人
- 职责：负责前端基础框架、脚手架的规划与搭建，代码审阅，项目进度跟进，前端任务分配，前端技能讲解和培训。

### 广州海关技术处

- 单位简介：中国海关。
- 主营业务：海关事务。

> 2013.07 - 2015.01

- 职位：软件工程师
- 职责：负责中国海关内部业务系统的开发和维护，新系统原型制作、前端应用开发。

--------

## Project experience

### IM 客户端

- 项目仓库（客户端开源）：[https://github.com/SANGET/little-chat][little-chat]
- 在线地址（非商用）：[https://chat.ukelli.com/][chat.ukelli]

> Synergy88

- 项目介绍：主要应用于与公司业务结合，为战略产品。
- 本人负责：web 客户端制作，Native 客户端（Flutter方向）规划。
- 应用技术：前后端分离架构。客户端程序整体使用 `Typescript`。项目结构分为 3 层结构，SDK -> Actions -> UI。
  1. `SDK` 为「以 `websocket` 作为通讯通道， `protobuf` 作为底层通讯协议」的 `API` 封装，提供给 Actions 与 UI 数据支持。
  2. `Actions` 为应用核心业务数据和对应的操作的封装，拥有一套完整的内部数据结构，为 `UI` 提供数据。主要使用 Redux 管理方案。
  3. `UI` 为数据展示以及处理响应用户操作，以及业务处理等。主要使用 `React`。

技术标签：`Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`

### 前端基础库与框架搭建

> Synergy88

目的：响应敏捷开发方式，规范前端团队开发方式，提升项目研发效率，建立健全的文档机制，让项目可持续维护。

项目库一览：

- [`basic-helper`][basic-helper]：提供开发常用的数据处理函数，如`时间处理`、`金钱格式处理`、`数组处理`、`通用订阅发布机制`、`本地存储接口`（Web 和 React-Native）等。
- [`uke-request`][uke-request]：基于 fetch API 的 http 请求封装，内置中间件（内置 RC4 数据加解密、LZMA 数据压解缩中间件）机制、RESTFul API 支持。
- [`ukelli-ui`][ukelli-ui]：基于 `React` 的 `UI` 框架，作用于公司所有前端项目，有统一的 UI 交互和表现形式，提高开发效率。
- [`uke-admin-web-scaffold`][uke-admin-web-scaffold]：管理后台脚手架工具，业务与 UI 分离，声明式页面业务开发，提高开发效率，统一 UI 交互、风格，拥有支持多标签页、参数路由跳转等特性。
- [`uke-dashboard`][uke-admin-seed]：结合上述的管理系统模版框架，主要为了应对快速开发系统的需求，规范管理后台的开发规范，已于项目维护。

技术标签: `Typescript`, `React`, `Node`

### 商务平台

> Synergy88

- 主要负责：提供前端基础技术支持，前端基础框架搭建，业务开发任务分配，产出各个终端(PC、Mobile、Client)的应用。
- 应用技术：前后端分离的应用。中前端使用了 Node 做中转服务器，主要做前端资源调配，IP 过滤，后端对客户端配置中转等。

技术标签: `React`, `React-Native`, `Node`, `Electron`

[技术细节](/uke-libs)

### 国际司综合业务管理系统

> 广州海关

- 项目简介：中国海关总署国际司业务系统，处理国内海关人员和领导出入境的流程。
- 系统架构：系统分层架构，分为Data、Framework、Workflow、User、Web、Web Api，测试先行，TDD（测试驱动开发）模式，实现底层逻辑高度重用，适配其他业务系统，开发其他业务系统，只需要实现表现层 Web。
- 本人职责：负责项目前端设计、实现和前端组织，web api 制定。

技术标签：`Angular`, `D3`, `RequestJs`, `.NET MVC 4.5`, `Web API`, `MongoDB`, `MSSQL`

### 海关邮递物品查询系统

> 广州海关

- 本人职责：项目海关邮递物件的微信接入。
- 微信公众号：广州海关12360（gz12360）的邮递物件查询系统。

技术标签：`Polymer`, `Node`, `MONO`

--------

## Open source libs

- [little-chat](https://chat.ukelli.com/) IM client
- [basic-helper](https://basic.ukelli.com/) JS basic helper lib
- [uke-request](https://request.ukelli.com/) HTTP request lib with middleware
- [ukelli-ui](https://ui.ukelli.com/) Base on React's UI lib
- [uke-admin-web-scaffold](https://scaffold.ukelli.com/) Scaffold of web admin dashboard
- [uke-dashboard](https://admin.ukelli.com/) Web admin dashboard

--------

## Educational experience

- Guangdong Industry Technical College 2010-2013

--------

## Contact

- <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- <a href="https://github.com/SANGET" target="_blank">GitHub</a>
- [Personal Blog](https://ukelli.com/)

## Self-evaluation

- Living in an English environment for 4 years, improving my self.
- Self-discipline, self-motivation, keep learning, pursuit of perfection, seeking breakthrough.

[uke-request]: https://github.com/SANGET/uke-request
[basic-helper]: https://github.com/SANGET/basic-helper
[ukelli-ui]: https://github.com/ukelli/ukelli-ui
[uke-admin-web-scaffold]: https://github.com/SANGET/uke-admin-web-scaffold
[uke-admin-seed]: https://github.com/SANGET/uke-admin-seed
[little-chat]: https://github.com/SANGET/little-chat
[chat.ukelli]: https://chat.ukelli.com/
