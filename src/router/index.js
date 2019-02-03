import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import AddPost from '../components/AddPost.vue';
import ViewPost from '../components/ViewPost.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/add',
            name: 'Add Post',
            component: AddPost,
        },
        {
            path: '/view',
            name: 'View Post',
            component: ViewPost,
        }
        ],
})