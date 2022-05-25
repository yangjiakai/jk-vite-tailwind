<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-card class="card">AAA</el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <Header />

  <router-view class="layout"> </router-view> -->
</template>

<script setup></script>

<style scoped>
.layout {
  padding: 50px;
  height: 100vh;
  background-image: linear-gradient(135deg, #c7cfe6, #d7dde8);
}

.common-layout {
  height: 100vh;
}

.el-container {
  height: 100%;
}

.el-aside {
  background-color: #ccc;
  overflow: scroll;
}

.el-header {
  background-color: #aaa;
}

.el-main {
  background-color: #888;
  overflow: scroll;
}

::-webkit-scrollbar {
  width: 0;
  height: 16px;
  background-color: #abc;
}

.card {
  height: 3000px;
}
</style>
