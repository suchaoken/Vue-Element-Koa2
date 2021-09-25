<template>
  <div>
    <el-button label="left" type="primary">注册</el-button>
    <el-button label="right" @click="rightshow()" type="primary"
      >用户列表</el-button
    >
    <el-form label-width="50px">
      <el-form-item label="账号">
        <el-input v-model="temp.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="temp.password"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="temp.nickname"></el-input>
      </el-form-item>
      <el-button label="left" @click="createUser()" type="primary"
        >创建用户</el-button
      >
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      temp: {
        account: "",
        password: "",
        nickname: "",
      },
    };
  },
  methods: {
    rightshow() {
      this.$router.push({ path: "userlist" });
    },
    async createUser() {
      const result = await axios.post("/user", {
        account: this.temp.account,
        password: this.temp.password,
        nickname: this.temp.nickname,
      });
      console.log("result", result);
      console.log("提交");
      console.log(this.temp.account);
      console.log(this.temp.password);
      console.log(this.temp.nickname);
    },
  },
};
</script>