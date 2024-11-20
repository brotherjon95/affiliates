<template>
  <section class="dialog-wrapper">
    <dialog class="dialog" open>
      <slot></slot>
    </dialog>
  </section>
</template>

<style>
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: relative;
  margin: 20px auto;
  max-width: calc(400px - 10px);
  width: 100%;
  background-color: #f6f6f6;
  color: #060606;
  border-radius: 5px;
  border: none;
}
</style>