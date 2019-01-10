import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        allPosts : null,
    },
    mutations : {
        updatePosts(state, allPosts) {
            state.allPosts = allPosts
        },
    },
    actions: {
        getAllPosts({ commit }) {
            axios.get('/api/v1/blog')
                .then(result => commit('updatePosts', result.data))
                .catch(console.error)
        },
    }
});