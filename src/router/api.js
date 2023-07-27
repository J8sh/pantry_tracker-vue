import axios from 'axios';

var simplecrypt = require("simplecrypt");

var sc = simplecrypt();
            

axios.defaults.withCredentials = true;

// Define your API base URL
const apiClient = axios.create({
  //withCredentials: true,
  baseURL: 'http://172.30.123.78:3001/' 
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
    var hashPass = sc.encrypt(user.password)
    console.log(hashPass)

    var mess = sc.decrypt(hashPass)
    console.log(mess)
    const data = { email: user.email, password: user.password}
    return apiClient.post('/user/login', data)
  }
};