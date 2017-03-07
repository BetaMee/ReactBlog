# ReactBlog
a blog system based on React+Node


以[NodeBlog](https://github.com/BetaMee/NodeBlog)为基础，开发一个React+Node的blog系统，简单可易用的系统。

需求：

1. 完善的api接口，返回的是json数据，前端使用fetch获取数据。
2. 后期使用electron开发桌面应用，用于本地写博客。（或许我可以写一个像hexo那样的可以部署到github上的桌面应用）
3. 以我喜爱的material ui开发，后期设计自己的主题
4. 有用户权限
5. 留言系统就不自己做了
6. post模型和user模型
7. 正式部署到服务器上

未来计划：

1. electron桌面应用
2. 设计自己的主题风格
3. 开发部署工具，部署到github上，静态博客

设计：

1. 先以NodeBlog为基础完善后台api设计.
2. react+redux+react-router+webpack2.0+mongodb+express（isomorphic）

详细踩坑经验见issue


node: v6.9.4

yarn: v0.20.3

# Usage:

installation `yarn`

run in devlopment: `yarn run dev`

run in production:`yarn run build` && `yarn run serve`


## What's included



