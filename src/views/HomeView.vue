<script setup lang="ts">
import { ref } from 'vue'
import type { Dish, ReccommendStatus } from '@/types'
import { statusList } from '@/constants'

interface Restaurant {
  name?: string
  status?: ReccommendStatus
  dishes?: Dish[]
}

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  status: 'Want to Try'
})

function addRestaurant() {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    status: newRestaurant.value.status,
    dishes: []
  })
}
</script>

<template>
  <main>
    <pre>{{ newRestaurant }}</pre>
    <h2>Hello</h2>
    <!-- Create a form that allows users to add a restaurant to a list. -->
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name">Restaurant Name</label>
        <input id="restaurant-name" v-model="newRestaurant.name" type="text" />
      </div>
      <!-- <div>
        <label for="restaurant-address">Restaurant Address</label>
        <input id="restaurant-address" v-model="newRestaurant.address" type="text" />
      </div> -->
      <div>
        <label for="restaurant-status">Restaurant Status</label>
        <select id="restaurant-status" name="restaurant-status" v-model="newRestaurant.status">
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant">
        {{ restaurant.name }} -
        {{ restaurant.status }}
      </li>
    </ul>
  </main>
</template>
