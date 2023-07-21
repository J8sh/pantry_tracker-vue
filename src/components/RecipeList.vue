<style setup>
   
</style>

<template>
  <div>
    <h3>Recipes</h3>
    <button @click="getRecipes">get</button>
  </div>
</template>

<script>
import api from '../router/api.js'
import axios from 'axios';

export default {
  data() {
    return {
      listOfFood: []
    };
  },
  methods: {
    getRecipes(){
        api.fetchData()
            .then(response => {
                const data = response.data.data.ingredients;
                for(let i = 0; i < data.length; i ++){
                    this.listOfFood.push(data[i].name)
                }
                console.log(data)
                console.log(this.listOfFood)
                this.searchSpoon(this.listOfFood)
            })
            .catch(error => {
                console.error(error);
            });
    },
    searchSpoon(list_items){
        const ingredients_list = list_items.join();
        axios({
            method: "GET",
            url: "https://api.spoonacular.com/recipes/findByIngredients",
            params: {
                ingredients: ingredients_list,
                number: 10,
                limitLicense: true, 
                ranking: 1, 
                ignorePantry: false,
                apiKey: "5dbbba235c8d4c80b6d225631021da99"
            },
            data: ingredients_list,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error.message);
        });
    },
    mounted() {
      
    }
  }
};
</script>