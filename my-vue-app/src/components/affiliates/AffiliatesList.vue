<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import AffiliatesMember from './AffiliatesMember.vue';
import { AffiliatesMemberProps } from './AffiliatesData.vue';

enum SortMode {
  ASC = 'asc',
  DESC = 'desc'
}

interface CoordinatesProps {
  lat: number;
  lng: number;
}

interface AffiliateIsEligibleProps extends CoordinatesProps {
  radiusValue: number;
}

const { affiliates } = defineProps(['affiliates']);

const enteredSearchTerm = ref<number>(100);
const activeSearchTerm = ref<number>(100);
const filterDataType: string = 'number';
const totalRadius: number = 6371000;
const sorting = ref<string>(SortMode.ASC);
const affiliatesMembers: AffiliatesMemberProps[] = affiliates;

// COMPUTED

const availableAffiliates = computed(function () {
  let affiliates: AffiliatesMemberProps[] = [];

  if (activeSearchTerm.value) {
    affiliates = affiliatesMembers.filter((member) => {
      const eligibleAffiliate: boolean = affiliateIsEligible({ lat: parseFloat(member.latitude), lng: parseFloat(member.longitude), radiusValue: activeSearchTerm.value});

      if (eligibleAffiliate) {
        return member;
      }
      return null;
    });
  } else if (affiliatesMembers) {
    affiliates = affiliatesMembers;
  }

  return affiliates;
});

const displayedAffiliates = computed(function () {
  if (!sorting.value) {
    return availableAffiliates.value;
  }
  return availableAffiliates.value.slice().sort((member1, member2) => {
    if (sorting.value === SortMode.ASC && member1['affiliate_id'] > member2['affiliate_id']) {
      return 1;
    } else if (sorting.value === SortMode.ASC) {
      return -1;
    } else if (sorting.value === SortMode.DESC && member1['affiliate_id'] > member2['affiliate_id']) {
      return -1;
    } else {
      return 1;
    }
  });
});

// WATCHER

watch(enteredSearchTerm, function (newValue: number) {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
});

// FUNCTIONS

function sort(mode: string) {
  sorting.value = mode;
}

function updateSearch(val) {
  const enteredValue: number = parseInt(val);
  if (enteredValue < 0) {
    enteredSearchTerm.value = 0;
  } else if (enteredValue >= totalRadius) {
    enteredSearchTerm.value = totalRadius / 1000;
  } else {
    enteredSearchTerm.value = val;
  }
}

function calculateRadius(degrees: number): number {
  return degrees * Math.PI / 180;
}

function affiliateIsEligible({ lat, lng, radiusValue }: AffiliateIsEligibleProps): boolean {
  const affiliateLat: number = calculateRadius(lat);
  const affiliateLng: number = calculateRadius(lng);
  const enteredRadiusValue = radiusValue * 1000;
  
  const baseCoordinates: CoordinatesProps = {
    lat: calculateRadius(parseFloat('53.3340285')),
    lng: calculateRadius(parseFloat('-6.2535495')),
  };

  const deltaLat: number = affiliateLat - baseCoordinates.lat;
  const deltaLng: number = affiliateLng - baseCoordinates.lng;

  const distanceAngle: number = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(affiliateLat) * Math.cos(affiliateLng) * Math.pow(Math.sin(deltaLng / 2), 2)));

  return enteredRadiusValue > distanceAngle * totalRadius;
}
</script>

<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="radius">
        Filter by radius (<strong>KM</strong>):<br />
        <em><strong>{{ displayedAffiliates.length }}</strong> results, <strong>{{ activeSearchTerm }}</strong> KM from base</em>
      </label>
      <base-input 
        @search="updateSearch" 
        :search-term="enteredSearchTerm" 
        :inputType="filterDataType" 
        :minValue="0" 
        :maxValue="totalRadius / 1000"
      >
      </base-input>
    </div>
    
    <div class="form-control">
      <label>
        Filter by ID:<br />
        <em><strong>{{ sorting === SortMode.ASC ? 'Ascending' : 'Descending' }}</strong> order</em>
      </label>

      <div class="form-control-horizontal">
        <base-button @click="sort(SortMode.ASC)" :class="sorting === SortMode.ASC ? 'active' : ''">{{ SortMode.ASC.toUpperCase() }}</base-button>
        <base-button @click="sort(SortMode.DESC)" :class="sorting === SortMode.DESC ? 'active' : ''">{{ SortMode.DESC.toUpperCase() }}</base-button>
      </div>
    </div>
  </form>
  
  <ul v-if="displayedAffiliates.length">
    <affiliates-member
      v-for="member in displayedAffiliates"
      :key="member['affiliate_id']"
      :id="member['affiliate_id']"
      :name="member.name"
      :latitude="member.latitude"
      :longitude="member.longitude"
    >
      {{ member.name }}
    </affiliates-member>
  </ul>
  <p v-else>Sorry, there are no available affiliates in desired radius.</p>
</template>

<style scoped>
  form {
    display: flex;
    padding-bottom: 20px;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 220px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }

  .form-control:nth-of-type(2) {
    margin-left: 20px;
  }

  .form-control:nth-of-type(2) button:nth-of-type(1) {
    margin-right: 15px;
  }

  .form-control-horizontal {
    display: flex;
  }

  .form-control label {
    color: #060606;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 600px) {
    form { 
      flex-direction: column;
      padding: 0px;
    }
    .form-control {
      margin: 0px 0px 20px 0px;
    }

    .form-control:nth-of-type(2) {
      margin-left: 0px;
    }
  }
</style>