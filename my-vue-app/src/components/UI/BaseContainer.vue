<template>
  <section class="base-container">
    <slot></slot>
  </section>
</template>

<style scoped>
.base-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  color: #060606;
  border-radius: 5px;
}
</style>