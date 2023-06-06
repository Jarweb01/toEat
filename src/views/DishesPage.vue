<script setup lang="ts">
import { ref } from 'vue'

interface Dish {
  name?: string
  diet?: Diet
  status?: ReccommendStatus
}

type Diet = 'vegetarian' | 'gluten-free' | 'lactose-free'

const statusList = ['Want to Try', 'Reccommended', 'Do Not Reccommend', 'Must Try'] as const

type ReccommendStatus = (typeof statusList)[number]

const dishList = ref<Dish[]>([])
const newDish = ref<Dish>({
  status: 'Want to Try'
})

function addDish() {
  dishList.value.push({
    name: newDish.value.name,
    status: newDish.value.status
  })
}
</script>

<template>
  <main>
    <pre>{{ newDish }}</pre>
    <h2>Hello</h2>
    <!-- Create a form that allows users to add a restaurant to a list. -->
    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">Dish Name</label>
        <input id="dish-name" v-model="newDish.name" type="text" />
      </div>
      <!-- <div>
        <label for="restaurant-address">Restaurant Address</label>
        <input id="restaurant-address" v-model="newRestaurant.address" type="text" />
      </div> -->
      <div>
        <label for="dish-status">Dish Status</label>
        <select id="dish-status" name="dish-status" v-model="newDish.status">
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Dish</button>
    </form>
    <ul>
      <li v-for="dish in dishList" :key="dish">
        {{ dish.name }} -
        {{ dish.status }}
      </li>
    </ul>
  </main>
</template>
