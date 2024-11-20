<template>
  <input 
    @input="search" 
    :type="inputType" 
    :min="minValue"
    :max="maxValue"
    :value="searchTerm" 
    placeholder="Please enter radius" 
    ref="inputValue" 
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { searchTerm, inputType, minValue, maxValue } = defineProps<{
  searchTerm: string | number;
  inputType: string;
  minValue: number;
  maxValue: number;
}>();

const emit = defineEmits<{
  (event: 'search', value: string): void;
}>();

const search = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit('search', value);
};
</script>

<style scoped>
input {
  font: inherit;
  max-width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  color: black;
}
</style>

