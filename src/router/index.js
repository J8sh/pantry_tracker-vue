import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.useAttrs(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})