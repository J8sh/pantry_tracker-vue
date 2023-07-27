<script>
import api from '../router/api.js'
//import bcrypt from 'bcrypt'

export default {
    data(){
        return {
            userInfo: {
                name: "",
                email: "",
                password: ""
            }
        }
    },
    methods:{
        registerUser(){
            // const hashedPass = bcrypt.hashSync(this.user.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
            // this.user.password = hashedPass;
            api.createUser(this.userInfo)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}

</script>

<template>
  <div class="col-12 col-sm-6 mx-auto mt-5 shadow rounded p-5">
    <h3 class="mb-4">Register</h3>
    <form @submit.prevent="registerUser()">
        <div class="form-group mb-3">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="userInfo.name" required>
        </div>
        <div class="form-group mb-3">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="userInfo.email" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group mb-2">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="userInfo.password" required>
        </div>
        <br>
        <div class="mt-4 d-flex justify-content-end">
            <div class="col-12 col-sm-6 mx-auto d-flex justify-content-around">
                <button type="submit" class="btn btn-primary">Submit</button>
                <a type="button" class="ml-3" href="/login"> Back to login </a>
            </div>
        </div>
    </form>
  </div>
</template>