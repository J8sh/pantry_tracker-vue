//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
//import axios from 'axios'
//import VueAxios from 'vue-axios'

// Add Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Add Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'


const app = createApp(App)

app.use(router)
//app.use(VueAxios, axios)


app.mount('#app')
