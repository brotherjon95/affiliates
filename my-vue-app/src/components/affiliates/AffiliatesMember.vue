<template>
  <li>
    <h3>{{ name }}</h3>
    <p>ID: <strong>{{ id }}</strong></p>
    <base-button @click="toggleMoreInfo">view</base-button>
  </li>
  <teleport to='body'>
    <base-dialog v-if="showData">
      <h3>{{ name }}</h3>
      <p>ID: <strong>{{ id }}</strong></p>
      <p>Latitude: <strong>{{ latitude }}</strong></p>
      <p>Longitude: <strong>{{ longitude }}</strong></p>
      <div>
        <base-button @click="toggleMoreInfo">close</base-button>
      </div>
    </base-dialog>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { id, name, latitude, longitude } = defineProps(['id', 'name', 'latitude', 'longitude']);
const showData = ref<boolean>(false);

function toggleMoreInfo()  {
  showData.value = !showData.value;
}
</script>

<style scoped>
li {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 0 20px;
  padding: 20px;
  background-color: #f2f2f2;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.26); */
  border: 1px solid #ccc;
  border-radius: 5px;
}

li h3 {
  margin: 0 0 15px;
}

.dialog h3 {
  margin-top: 0;
  text-align: center;
}

.dialog div {
  display: flex;
  justify-content: center;
}

@media (min-width: 580px) {
  li {
    width: calc(42% - 10px);
  }
}

@media (min-width: 992px) {
  li {
    width: calc(28% - 10px);
  }
}

@media (min-width: 1200px) {
  li {
    width: calc(20% - 10px);
  }
}
</style>