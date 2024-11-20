<script setup lang="ts">
import AffiliatesList from './AffiliatesList.vue';
import affiliatesArray from '../../data/affiliates.json';

export interface AffiliatesMemberProps {
  affiliate_id: number;
  name: string;
  latitude: string;
  longitude: string;
}

const affiliatesData: AffiliatesMemberProps[] = affiliatesArray;
</script>

<template>
  <base-container>
    <h1>Filter Affiliates</h1>
    <affiliates-list :affiliates="affiliatesData"></affiliates-list>
  </base-container>
</template>
