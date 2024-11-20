<template>
  <button>
    <slot>click me</slot>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  width: auto;
  background-color: #b8c8f8;
  color: black;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  font-weight: bold;
}

button.active, button:active, button:focus {
  background-color: #8e9fd4;
}
</style>