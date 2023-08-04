import axios from 'axios';

//axios.defaults.withCredentials = true;

// Define your API base URL
const apiClient = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001/' 
});

// Define your API methods
export default {
  // ingredients
  fetchData() {
    return apiClient.get('/ingredients');
  },
  addIgredient(item){
    const data = { name: item }
    return apiClient.post('/ingredients', data);
  },
  deleteIngredient(item_id){
    return apiClient.delete('/ingredients/' + item_id);
  },
  // user
  createUser(user){
    const data = { name: user.name, email: user.email, password: user.password }
    return apiClient.post('/user/create', data);
  },
  userLogin(user){
    const data = { email: user.email, password: user.password}
    return apiClient.post('/user/login', data)
  },
  createRecipes(food){
    const data = {image: food.image, name: food.name}
    return apiClient.post('/recipes')
  }
};