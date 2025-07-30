//处理权限验证
import { router, addRouters } from "~/router";
import { getToken } from "~/composables/auth"
import {
    toast,
    showFullLoading,
    hideFullLoading
} from "~/composables/util"
import store from "./store";

// 全局前置守卫
let hasGetInfo = false //调用过以后改为true,防止重复加载getinfo
router.beforeEach(async (to, from, next) => {
    // 显示loading
    showFullLoading()

    // console.log(to, from);
    // 没有登录强制跳转回登录页
    const token = getToken()
    if (!token && to.path != "/login") {
        toast("请先登录", "error")
        return next({ path: "/login" })
    }
    // 防止重复登录
    if (token && to.path == "/login") {
        toast("请勿重复登陆", "error")
        //from.path拿到从哪里来的路径
        return next({ path: from.path ? from.path : "/" })
    }

    // 如果用户登录了自动获取用户信息并存储到vuex中
    let hasNewRoutes = false
    if (token && !hasGetInfo) {
        let { menus } = await store.dispatch("getinfo")
        hasGetInfo = true
        //动态添加路由
        hasNewRoutes = addRouters(menus)
    }

    //设置页面标题 
    let title = (to.meta.title ? to.meta.title : "") + "-商城后台管理"
    document.title = title

    //放行，不然不通过，无内容
    hasNewRoutes ? next(to.fullPath) : next()
})


// 全局后置守卫
router.afterEach((to, from) => hideFullLoading())