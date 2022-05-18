<template>
  <el-card class="box-card w-1/2 mx-auto p-10 my-5">
    <el-form :model="loginForm" :rules="loginRules" ref="loginFromRef">
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon="User"
          suffix-icon="Search"
          placeholder="admin"
          name="username"
          type="text"
          tabindex="2"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon="Lock"
          placeholder="123456"
          name="password"
          :type="passwordType"
          tabindex="1"
        >
          <template #suffix>
            <el-icon class="el-input__icon" @click="onChangePasswordType">
              <search v-if="passwordType == 'password'" />
              <camera v-else />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      style="width: 100%; margin-bottom: 30px"
      :loading="loading"
      @click="handleLogin"
      >登录</el-button
    >
  </el-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

// 响应式数据源
// const loginForm = ref(null);
const loginForm = ref({
  username: "admin",
  password: "123456",
});

// 指定验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "请输入用户名",
    },
    { min: 3, max: 20, message: "Length should be 3 to 5", trigger: "change" },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error("密码长度不能小于6位"));
        } else {
          callback();
        }
      },
    },
  ],
});

const passwordType = ref("password");
const onChangePasswordType = () => {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
};

// 表单校验是表单使用的一个通用能力，在 element-plus 中想要为表单进行表单校验那么我们需要关注以下三点：

// 为 el-form 绑定 model 属性
// 为 el-form 绑定 rules 属性
// 为 el-form-item 绑定 prop 属性

const loading = ref(false);
const login = () => {
  console.log(loginForm.value);
};

const loginFromRef = ref(null);
const handleLogin = () => {
  loginFromRef.value.validate((valid) => {
    if (!valid) return;

    loading.value = true;

    store
      .dispatch("user/login", loginForm.value)
      .then(() => {
        loading.value = false;

        console.log("登录成功");
        router.push("/");
        // TODO: 登录后操作
      })
      .catch((err) => {
        console.log(err);
        loading.value = false;
      });
  });
};
</script>
