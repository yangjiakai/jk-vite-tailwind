<template>
  <div>
    <h1>Child</h1>
    <hr class="my-10" />
    <el-card class="box-card">
      <h1>父组件输入框</h1>
      <h1 class="ml-5 mt-5 text-purple-600">{{ time }}</h1>
      <el-input v-model="time" class="m-5" placeholder="时间" />
    </el-card>
    <date v-model:fullTime="time"></date>
  </div>
</template>

<script>
import Date from "./Date.vue";
export default {
  data() {
    return {
      time: "2019-12-12",
    };
  },
  components: { Date },
  methods: {},
};
</script>

<style scoped>
</style>
