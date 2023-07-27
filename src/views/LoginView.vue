<script>
import api from '../router/api.js'


export default {
    data(){
        return{
            user:{
                email: "",
                password: ""
            }
        }
    },
    methods:{
        logIn(){
            api.userLogin(this.user)
                .then(response => {
                    console.log(response.data)
                    // if array is zero then , email or password is wrong
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}

</script>

<template>
    <div class="login col-12 col-sm-6 mx-auto mt-5 shadow rounded p-5">
        <h3 class="mb-4">Login</h3>
        <form aciton="/login" methond="POST">
            <div class="form-group mb-4">
                <label for="email">Email address</label>
                <input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group mb-2">
                <label for="password">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="password" placeholder="Password">
            </div>
            <br>
            <div class="mt-4 d-flex justify-content-end">
                <div class="col-12 col-sm-6 mx-auto d-flex justify-content-around">
                <button type="button" @click="logIn()" class="btn btn-primary">
                Login
                </button>
                <a type="button" class="btn btn-primary ml-3" href="/register">
                Register
                </a>
                </div>
            </div>
        </form>
    </div>
  </template>