## 友情提示
- 用户名: admin  
- 密码: admin  

项目交流: 想要交流项目的朋友，可以加QQ或QQ邮箱与我联系。  
- QQ: 2235329077@qq.com   


## 前言  

项目打造了一个完整的后台管理系统，采用现阶段流行技术实现。  


## 项目介绍  

一个商城后台管理系统的前端项目，基于Vue+Element实现，采用响应式布局方式。主要包含后台面板、商品管理、用户管理、订单管理、管理员管理、系统设置、分销模块、统计报表等功能。  


## 技术栈介绍
Vue3、Vue Router、Vuex、Element Plus、 Axios、ECharts、GSAP （高性能动画库）、TinyMCE （功能完善的富文本编辑器）、VueUse （常用功能函数集）、Windicss（CSS 框架）、Vite

## 项目演示  
<img width="1920" height="894" alt="image" src="https://github.com/user-attachments/assets/53c19884-ceac-4d24-b935-0c3c8d9c521b" />

<img width="1916" height="951" alt="image" src="https://github.com/user-attachments/assets/5548be65-2988-48f8-9919-53c72d16e60e" />
<img width="1920" height="708" alt="image" src="https://github.com/user-attachments/assets/ac8574a1-4d66-4e18-8ea3-9a8a9005aa8c" />
<img width="1916" height="925" alt="image" src="https://github.com/user-attachments/assets/2367c655-9af2-4a34-975e-d8c8c6ab8544" />
<img width="1916" height="938" alt="image" src="https://github.com/user-attachments/assets/9057d5d3-577d-4234-a462-cc3855df1e1e" />


##页面布局
.vscode -- Visual Studio Code编辑器的配置文件
├── extensions.json -- 全局配置对象
public -- 根目录的静态文件
├── tinymce -- 富文本编辑器的 TinyMCE 库或插件文件
├── alipay.png -- 支付宝的图片图标，用于在应用程序中显示支付宝支付相关的信息
├── vite.svg -- Vite.js 的 SVG 图标或标志，用于在应用程序中显示 Vite.js 相关的信息
├── wepay.png -- 微信支付的图片图标，用于在应用程序中显示微信支付相关的信息
src -- Vue.js应用程序的源代码
├── App.vue -- 应用程序的根组件，定义了应用程序的整体结构和行为
├── axios.js -- 与后端 API 进行通信的 Axios 实例
├── main.js -- 应用程序的入口点，负责初始化 Vue 实例并将其挂载到 DOM 上
├── permission.js -- 授权和身份验证的逻辑
├── api -- 所有与后端 API 进行通信的代码
├── assets -- 静态资源，例如图像、字体和样式表
├── components -- 通用组件封装
├── composables -- 工具函数封装
├── directives -- 权限配置
├── layout -- 布局组件
├── router -- vue-router路由配置
├── store -- vuex的状态管理
└── pages -- 前端页面
    ├── index.vue -- 首页
    ├── login.vue -- 登录页
    ├── 404.vue -- 404报错页
    ├── access -- 权限管理
    ├── category -- 分类管理
    ├── comment -- 评论管理
    ├── coupon -- 优惠券管理
    ├── distribution -- 分销模块
    ├── goods -- 商品管理
    ├── image -- 图库管理
    ├── level -- 会员等级
    ├── manager -- 管理员管理
    ├──notice -- 公告管理
    ├── order -- 订单管理
    ├── role -- 角色管理
    ├── setting -- 系统设置
    ├── skus -- 规格管理
    └── user -- 用户管理
.env.development -- 开发环境的环境变量
.env.production -- 生产环境的环境变量
.gitignore -- Git控制系统忽略的文件和目录列表
index.html -- 整个 Vue.js 应用程序的 HTML 模板
package-lock.json -- 自动生成的，用于确保每个开发人员在安装依赖时使用相同的版本
package.json -- 应用程序所需的所有依赖项和脚本
vite.config.js -- 配置文件



