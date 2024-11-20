<script setup lang="ts">
import AffiliatesDescription from "./components/affiliates/AffiliatesDescription.vue";
import AffiliatesData from './components/affiliates/AffiliatesData.vue';
</script>

<template>
  <affiliates-description>
    <template #title>
      <h1>Affiliates List</h1>
    </template>

    <p>Here you can find a list of our Affiliates. Our base office is located in <strong>Dublin</strong> (<em>lat</em>: 53.3340285, <em>lng</em>: -6.2535495).</p>
    <p>Within the given input, you can filter our Affiliates by radius which center is of course, our office.</p>
  </affiliates-description>

  <affiliates-data></affiliates-data>
</template>

<style scoped></style>
