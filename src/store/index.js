import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        allPosts : null,
        newPost : null,
        token : null,
        viewPost : [],
    },
    mutations : {
        updatePosts(state, allPosts) {
            state.allPosts = allPosts;
        },
        addNewPost(state, newPost) {
            state.newPost = newPost;
        },
        updateToken(state, token) {
            state.token = token;
        },
        viewPost(state, viewPost) {
            state.viewPost[viewPost.post.id] = viewPost;
        },
    },
    actions: {
        getAllPosts({ commit }) {
            axios.get('http://billblog.development-server.info/api/v1/blog')
                .then(result => commit('updatePosts', result.data))
                .catch(console.error)
        },
        addNewPost({ commit, state }, newPost) {
            axios.post('http://billblog.development-server.info/api/v1/blog?token='+state.token, newPost)
                .then(() => commit('addNewPost', newPost))
                .catch(console.error)
        },
        authenticate({ commit }) {
            const authData = {email:'joe@bloggs.com',password:'numpty'};
            axios.post(('http://billblog.development-server.info/api/v1/user/authenticate'), authData)
                .then(result => commit('updateToken', result.data.token))
                .catch(console.error)
        },
        viewPost({ commit, state }) {
            let i = 0;
            const len = state.allPosts.posts.length;
            for (i = 0; i < len; i++) {
                axios.get('http://billblog.development-server.info/api/v1/blog/'+i)
                    .then(result => commit('viewPost', result.data))
                    .catch(console.error)
            }
            console.log(state.viewPost)
        },
    }
});