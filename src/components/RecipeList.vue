<style setup>
   .recipe-display{
    min-height: 300px;
   }
</style>

<template>
  <div>
    <div class="row">
      <div class="col-auto"><h3>Recipes</h3></div>
      <div class="col-6"><button @click="getRecipes" class="btn btn-success rounded">Search Recipes</button></div>
    </div>
    <div v-for="(recipe, index) in recipeList" :key="index" class="recipe-display">
      <div class="row">
        <div class="col-2">
          <img src="{{ recipe.image }}" class="img-fluid" />
        </div>
        <div>
          <div>
            <h3>{{ recipe.name }}</h3>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../router/api.js'
import axios from 'axios';

export default {
  data() {
    return {
      listOfFood: [],
      recipeList: []
    };
  },
  methods: {
    getRecipes(){
        api.fetchData()
            .then(response => {
                this.listOfFood = '';
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
        const params = {
          ingredients: ingredients_list,
          number: 10,
          limitLicense: true, 
          ranking: 1, 
          ignorePantry: false
        }
        api.getRecipes(ingredients_list);
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
            //this.recipeList = response.data;
            console.log(response.data);
            this.recipeList = response.data;
            //console.log(this.recipeList);
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