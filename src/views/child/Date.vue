<template>
  <div>
    <el-card class="box-card mt-5">
      <h1>子组件</h1>
      <!-- <el-form-item label="时间">
          <el-input
            :value="fullTime"
            @input="$emit('update:fullTime', $event.target.value)"
          />
        </el-form-item> -->
      <input
        type="text"
        :value="fullTime"
        @input="$emit('update:fullTime', $event.target.value)"
      />
      <!-- <el-form
        :label-position="labelPosition"
        label-width="100px"
        style="max-width: 460px"
        class="pa-5"
      >
        <el-form-item label="时间">
          <el-input
            :value="fullTime"
            @input="$emit('update:fullTime', $event.target.value)"
          />
        </el-form-item>
        <el-form-item label="时">
          <el-input v-model="hour" />
        </el-form-item>
        <el-form-item label="分">
          <el-input v-model="minute" />
        </el-form-item>
        <el-form-item label="秒">
          <el-input v-model="second" />
        </el-form-item>
        <el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="changeTime"
          >提交</el-button
        >
      </el-form> -->
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    fullTime: {
      type: String,
    }, // 以前是`value：String`
  },
  // emits: ["update:fullTime"],
  // props: {
  //   fullTime: {
  //     type: String,
  //     default: "",
  //   },
  // },
};
</script>

<style scoped>
</style>
