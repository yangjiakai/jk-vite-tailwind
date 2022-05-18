<template>
  <div>
    <div
      class="
        p-6
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-lg
        flex
        items-center
        space-x-4
      "
    >
      <div class="shrink-0">
        <img class="h-12 w-12" src="@/assets/logo.png" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-slate-500">You have a new message!</p>
      </div>
      <el-button @click="getFn">get</el-button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

let getFn = () => {
  axios.get("/app/posts/1").then((res) => {
    console.log(res);
  });
};
</script>

<style scoped>
</style>
