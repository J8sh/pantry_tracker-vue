<script>
import ImageUploader from '@/components/ImageUploader.vue'
import FoodList from '@/components/FoodList.vue'
import RecipeList from '@/components/RecipeList.vue'

export default {
  components:{
    ImageUploader,
    FoodList,
    RecipeList
}
};

</script>

<template>
  <div>
    <div class="container text-center mt-3">
      <h1>Pantry Tracker</h1>  
    </div>
    <div class="rounded border border-2 p-3 col-12 col-md-8 col-lg-6 mx-auto mt-3">
      <ImageUploader />
    </div>

    <div class="rounded border border-2 p-3 col-12 col-md-8 col-lg-6 mx-auto mt-3">
      <FoodList />
    </div>

    <div class="rounded border border-2 p-3 col-12 col-md-8 col-lg-6 mx-auto mt-3">
      <RecipeList />
    </div>
    
  </div>
</template>

