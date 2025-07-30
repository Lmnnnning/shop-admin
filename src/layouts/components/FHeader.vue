<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <Shop />
            </el-icon>商品后台
        </span>
        <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
            <Fold v-if="$store.state.asideWidth == '250px'" />
            <Expand v-else />
        </el-icon>
        <el-tooltip class="box-item" effect="dark" content="刷新" placement="bottom">
            <el-icon class="icon-btn" @click="handleRefresh">
                <Refresh />
            </el-icon>
        </el-tooltip>
        <div class="ml-auto flex items-center">
            <el-tooltip class="box-item" effect="dark" content="全屏" placement="bottom">
                <el-icon class="icon-btn" @click="toggle">
                    <FullScreen v-if="!isFullscreen" />
                    <Aim v-else />
                </el-icon>
            </el-tooltip>

            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
                    {{ $store.state.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

    <!-- <el-drawer v-model="showDrawer" title="修改密码" size="45%" close-on-click-modal="false">
       
    </el-drawer> -->
    <FormDrawer ref="formDrawerRef" title="修改密码" destroyOnClose @submit="onSubmit">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px" size="small">
            <el-form-item prop="oldpassword" label="旧密码">
                <el-input v-model="form.oldpassword" placeholder="请输入旧密码">
                </el-input>
            </el-form-item>
            <el-form-item prop="password" label="新密码">
                <el-input type="password" show-password v-model="form.password" placeholder="请输入新密码">
                </el-input>
            </el-form-item>
            <el-form-item prop="repassword" label="确认密码">
                <el-input type="repassword" show-password v-model="form.repassword" placeholder="请输入确认密码">
                </el-input>
            </el-form-item>
        </el-form>
    </FormDrawer>
</template>
<script setup>
import { ref, reactive } from 'vue'
import FormDrawer from '~/components/FormDrawer.vue';
import { logout, updatepassword } from "~/api/manager"
import { showModel, toast } from '~/composables/util';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useFullscreen } from '@vueuse/core'
import { useRepassword } from '~/composables/useManager';
const {
    //是否全屏状态
    isFullscreen,
    //切换全屏
    toggle
} = useFullscreen()
const {
    formDrawerRef,
    form,
    rules,
    formRef,
    onSubmit,
    openRepasswordForm,

} = useRepassword()

const router = useRouter()
const store = useStore()


const handleCommand = (c) => {
    switch (c) {
        case "logout":
            handleLogout()
            break;
        case "rePassword":
            // showDrawer.value = true
            openRepasswordForm()
            break;
    }
}
//刷新
const handleRefresh = () => location.reload()



function handleLogout() {
    showModel("是否要退出登录?").then(res => {
        logout()
            .finally(() => {
                store.dispatch("logout")
                // 跳转为登录页
                router.push("/login")
                // 提示退出登录成功
                toast("退出登录成功")
            })

    })
}




</script>
<style>
.f-header {
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
    z-index: 1000;
}

.logo {
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin
}

.icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover {
    @apply bg-indigo-600;
}

.f-header .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center mx-5;
}
</style>