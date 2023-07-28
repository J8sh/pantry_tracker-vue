<style setup>
    .new-food{
      border: none;
    }
    .food-display{
      min-height: 300px;
    }
</style>

<template>
  <div>
    <div class="row">
    <div class="col-auto"><h3>Food Items</h3></div>
    <div class="col-6"><button @click="fetchFoodList" class="btn btn-success rounded">fetch</button></div>
    </div>
    <ul class="food-display list-group list-group-flush p-3 m-3 border rounded">
      <li v-for="(item, index) in foodItems" :key="index" class="list-group-item">
        <div class="row">
          <div class="col d-flex align-self-end">
            {{ item.name }}
          </div>
          <div class="col-3 d-flex justify-content-around">
            <!-- <button @click="" class="btn btn-warning"><i class="fa-regular fa-pen-to-square"></i></button> -->
            <button @click="deleteItem(index, item)" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </li>
    </ul>
    <div class="my-3 d-flex justify-content-center">
      <input type="text" v-model="newItem" placeholder="Enter a new food item" class="new-food">
      <button @click="addItem" class="btn btn-success rounded-circle"><i class="fa-solid fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
import api from '../router/api.js'

export default {
  data() {
    return {
      foodItems: [],
      newItem: '', 
      count: 0
    };
  },
  methods: {
    fetchFoodList() {
      api.fetchData()
        .then(response => {
          this.foodItems = response.data.data.ingredients;
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    },
    callFetch(count){
      if (count == 0){
        this.fetchFoodList();
      }
    },
    addItem() {
      if (this.newItem !== '') {
        this.foodItems.push({name: this.newItem});
        api.addIgredient(this.newItem)
        this.newItem = '';
        this.fetchFoodList()
      }
    },
    deleteItem(index, item) {
      this.foodItems.splice(index, 1);
      api.deleteIngredient(item.id)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        })
    },
    mounted() {
      foodItems = fetchFoodList();
    }
  }
};
</script>