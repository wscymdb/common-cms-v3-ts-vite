<template>
  <div class="login-left-item">
    <div class="title">CMS后台管理系统</div>
    <div class="content">
      <el-form ref="ruleFormRef" :model="dataForm" size="large" class="demo-ruleForm" status-icon>
        <el-form-item prop="username" required>
          <el-input v-model="dataForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password" required>
          <el-input
            type="password"
            show-password
            v-model="dataForm.password"
            placeholder="请输入密码"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="action">
      <el-button @click="handleConfirm">登 陆</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'

import { IAccountLogin } from '@/types/login'

const ruleFormRef = ref<FormInstance>()

const dataForm = reactive<IAccountLogin>({
  username: 'admin',
  password: '123456'
})

const loginStore = useLoginStore()
const handleConfirm = () => {
  ruleFormRef.value!.validate((valid) => {
    if (valid) {
      if (dataForm.username === 'admin' && dataForm.password === '123456') {
        loginStore.loginAction({ ...dataForm })
      } else {
        ElMessage.error('用户名或密码错误～')
      }
    }
  })
}
</script>

<style scoped lang="less">
.login-left-item {
  .title {
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  .action {
    text-align: center;
    .el-button {
      width: 100%;
      padding: 20px;
      background-color: #1a3ae6;
      color: #fff;
    }
  }
}
</style>
