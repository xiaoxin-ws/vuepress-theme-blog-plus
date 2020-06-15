# vuepress/theme-blog-plus

**预览地址: https://xiaoxin-ws.github.io/**
```
vuepress官方开发了两种主题：
1.文档主题:'@vuepress/theme-default'
2.博客主题：'@vuepress/theme-blog'

本项目采用博客主题为基础进行的二次扩展开发,官方默认原有配置依然有效。
开发目的：学习vue, ...
主题选择理由：blog项目结构简单。本打算继承式开发的，发现全局组件在子项目中无法修改，小白弄了好久弄不出来，干脆直接克隆原来项目扩展开发了。而文档主题代码结构相对于较复杂。

开源: 遵循官方的MIT协议（@/blog/.vuepress/theme/LICENSE）
logo头像来源：https://www.woyaogexing.com/touxiang/   （侵删，请issues留言！）
```

## 开发和打包

```bash
git clone https://github.com/xiaoxin-ws/vuepress-theme-blog-plus.git
cd vuepress-theme-blog-plus
yarn 或 npm i
yarn dev 或 npm run dev (本地预览)
yarn build 或 npm run build (编译打包，部署文件)
```
## 增加内容
```
导航悬浮动画,分类页，时间轴页，logo头像，导航栏高度调整，文章页的toc布局调整。。。

注意：theme这个文件夹是主题的渲染的类容,尽量不要动，除非你要对主题进行修改。没有一定基础，修改这个地方可能导致页面失效。当然也不是那么重要，改坏了从新克隆就行了。
```

## 配置文件
```
文章存放的文件夹：@/blog/_posts/文章.md
站点配置和主题配置文件：@/blog/.vuepress/config.js
配置参考：https://www.vuepress.cn/ 或 config下的注释

添加文章时的配置模板
xxx.md
---
title: Writing a VuePress theme
date: 2019-5-7 09:00:00
categories: 
  - 你好
  - 你好
tags: 
  - theme
  - blog
  - vuepress
author: ULIVZ
location: Shanghai  
---
```



For more details, please head VuePress's [documentation](https://v1.vuepress.vuejs.org/).

