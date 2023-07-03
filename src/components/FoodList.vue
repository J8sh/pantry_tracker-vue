<style setup>
    #food-list {
      padding: 10px;
      border: 1px solid #ccc;
    }
</style>

<template>
  <div>
    <h2>Food Items</h2>
    {{ fetchData() }}
    <ul>
      <li v-for="(item, index) in foodItems" :key="index">
        {{ item }}
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
    <div>
      <input type="text" v-model="newItem" placeholder="Enter a new food item">
      <button @click="addItem">Add</button>
    </div>
  </div>
</template>

<script>
import api from '../router/api.js'

export default {
  data() {
    return {
      foodItems: [],
      newItem: ''
    };
  },
  methods: {
    fetchData() {
      api.fetchData()
        .then(response => {
          // Handle the response data
          console.log(response.data);
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    },
    addItem() {
      if (this.newItem !== '') {
        this.foodItems.push(this.newItem);
        this.newItem = '';
      }
    },
    deleteItem(index) {
      this.foodItems.splice(index, 1);
    },
    async mounted() {
      await this.fetchFoodList()
    }
  }
};
</script>