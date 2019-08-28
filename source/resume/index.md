---
author: Alex
nav-menu: false
---

- [English version](/resume_en)

<!-- -------- -->

## 个人简介

我是张相杰（Alex），前端工程师，从事前端相关工作六年。过去主要工作为：`UI 框架` 建设、规划和应用； `web 管理后台前端框架` 搭建与应用；前端项目质量把控和团队协调等。

喜欢探寻事物运行原理，喜欢 `读书`、`运动`、`摄影`、`弹吉他`、`coding`。

- [PDF简历](/assets/other/resume.pdf)

--------

## 技能树

- 前端: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`
- 后端: `Node`
- 部署: `Docker`, `Kubernetes`, `Netlify`
- 工具: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

--------

## 工作经历

### Synergy88

- 公司简介：toB 综合技术提供商。
- 主营业务：商业系统研发、游戏研发、IM 服务。

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

## 项目

### IM 客户端(Elk-Chat)

- 项目仓库（客户端开源）：[https://github.com/elk-chat/elk_web][elk-chat]
- 在线地址（非商用）：[https://chat.ukelli.com/][chat.ukelli]

> Synergy88

- 项目介绍：主要于与公司业务结合，满足内部 IM 使用需求。
- 本人负责：web 客户端制作，Native 客户端（Flutter方向）规划。
- 应用技术：前后端分离架构。客户端程序整体使用 `Typescript`。项目结构分为 3 层结构，SDK -> Actions -> UI。
  1. `SDK` 为「以 `websocket` 作为通讯通道， `protobuf` 作为底层通讯协议」的 `API` 封装，提供给 Actions 与 UI 数据支持。
  2. `Actions` 为应用核心业务数据和对应的操作的封装，拥有一套完整的内部数据结构，为 `UI` 提供数据。主要使用 Redux 管理方案。
  3. `UI` 为数据展示以及处理响应用户操作，以及业务处理等。主要使用 `React`。

技术标签：`Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`

### Ukelli-UI 库

- 项目仓库：[https://github.com/ukelli/ukelli-ui][ukelli-ui]
- 在线文档：[https://ui.ukelli.com/][ui-doc]

> Synergy88

介绍：基于 `React` 的 `UI` 库，提供统一的 UI 交互和表现形式，提供方便数据录入的 [`聚合表单组件`][form-generator]、功能丰富的 [`数据渲染组件`][table-desc]，尝试以声明式 UI 的开发方式。

基于 Ukelli-UI 的应用：

- [Elk-Chat][elk-chat]
- [uke-admin-web-scaffold][elk-chat]

技术标签: `Typescript`, `React`, `Node`

### 管理系统脚手架

- 项目仓库：[https://github.com/SANGET/uke-admin-web-scaffold][uke-admin-web-scaffold]
- 在线文档：[https://scaffold.ukelli.com/][uke-admin-web-scaffold-doc]

> Synergy88

- 目的：为了快速响应日益丰富繁杂的业务需求，减少人员流动对项目的维护影响，高效稳健的管理系统开发，构建了管理系统脚手架工具。
- 介绍：管理后台脚手架 `uke-admin-web-scaffold`，业务与 UI 分离，声明式页面业务开发，高效稳健，统一 UI 交互、风格，支持多标签页、缓存参数路由等。
- 主要负责：脚手架整体规划，说明文档制作，不断完善功能。

技术标签: `Typescript`, `React`, `Node`

应用

- [uke-dashboard][uke-admin-seed]：管理系统模版框架应用，主要为了应对快速开发系统的需求，规范管理后台的开发规范，易于项目后期维护。

### 通讯工具类库

- 项目仓库：[https://github.com/SANGET/uke-request][uke-request]
- 在线文档：[https://request.ukelli.com/][uke-request-doc]

> Synergy88

- 目的：基于 fetch API 的 HTTP 请求封装，采取中间件机制，对数据进行过滤。内置了「RC4 加解密」和「LZMA 压解缩」中间件，支持中间件扩展，支持 RESTFul API。
- 目的：主要用于一个对于通讯安全有一定要求的项目，尽可能增加通讯数据被抓包解析的成本，以及压缩请求体的体积（最大10M请求体，压缩后为700k）。

技术标签: `Typescript`, `RC4`, `LZMA`

### 商务租赁平台

> Synergy88

- 介绍：业务模版出租业务，与 EnvatoMarket 类似的模版租赁系统。不断积累设计模版，以及对应的前端实现。需要快速响应跟进客户需求。
- 主要负责：提供前端基础技术支持，协调设计资源与前端资源，开发任务跟踪。
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

<!-- --------

## 开源库

- [elk-chat][chat.ukelli] 聊天客户端
- [basic-helper][basic-doc] JS 基础库
- [uke-request][request-doc] 中间件机制的请求库
- [ukelli-ui][ui-doc] 基于 React 的 UI 库
- [uke-admin-web-scaffold][uke-admin-web-scaffold-doc] 管理后台前端脚手架
- [uke-dashboard][uke-dashboard-doc] 管理后台模版 -->

--------

## 教育经历

- 广东轻工职业技术学院 2010-2013

--------

## 联系方式

- <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- <a href="https://github.com/SANGET" target="_blank">GitHub</a>
- [个人博客](https://ukelli.com/)

## 自我评价

- 自律、自我驱动，不断学习，追求完美，寻求突破。
- 在国外生活了 4 年，不断在学习并提高英语水平。

[uke-request]: https://github.com/SANGET/uke-request
[basic-helper]: https://github.com/SANGET/basic-helper
[ukelli-ui]: https://github.com/ukelli/ukelli-ui
[uke-admin-web-scaffold]: https://github.com/SANGET/uke-admin-web-scaffold
[uke-admin-seed]: https://github.com/SANGET/uke-admin-seed
[elk-chat]: https://github.com/elk-chat/elk_web
[chat.ukelli]: https://chat.ukelli.com/

[uke-admin-web-scaffold-doc]: https://scaffold.ukelli.com/
[uke-dashboard-doc]: https://admin.ukelli.com/
[ui-doc]: https://ui.ukelli.com/
[uke-request-doc]: https://request.ukelli.com/
[request-doc]: https://request.ukelli.com/
[basic-doc]: https://basic.ukelli.com/

[form-generator]: https://ukelli.com/%E5%9F%BA%E4%BA%8Ereact%E6%89%93%E9%80%A0%E6%9B%B4%E5%A5%BD%E7%94%A8%E7%9A%84%E8%81%9A%E5%90%88%E8%A1%A8%E5%8D%95
[table-desc]: https://ui.ukelli.com/Table
