<template>
  <div class="">
    <h1>Order</h1>
    <form action="">
      <label for="name">Name (4 to 8 characters):</label>

      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="4"
        maxlength="8"
        size="10"
        value="John"
        readonly
      />
    </form>
  </div>
</template>

<script setup>
</script>


<style lang="scss" scoped></style>
