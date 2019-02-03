<template>
    <div v-if="blog">
        <span>Message : {{blog.message}}</span>
        <div class="post" v-for="post in blog.posts" :key="post.id">
            <ul>
                <li>id : {{post.id}} </li>
                <li>title : <a v-bind:href="post.links.href">{{post.title}}</a></li>
                <li>creator : {{post.creator}}</li>
                <li><span v-on:click="showPost(post.id)">Show</span></li>
            </ul>
            <div class="view-post" v-if="!isHidden">
                <div v-if="view[post.id]" v-model="post.id">{{view[post.id].post.body}}</div>
            </div>
        </div>
    </div>
</template>

<script>
//import blog from '../data/posts';

import ViewPost from "@/components/ViewPost";
export default {
    name: 'HomePage',
    data () {
        return {
            isHidden : true,
        }
    },
    components: {ViewPost},
    created() {
      this.$store.dispatch('getAllPosts');
    },
    computed : {
        blog() {
            return this.$store.state.allPosts;
        },
        view() {
            if (!this.$store.state.viewPost.length) {
                this.$store.dispatch('viewPost')
            }
            return this.$store.state.viewPost;
        },
        postId() {
            return this.$store.state.postId;
        }
    },
    methods : {
        showPost: function (id) {
            this.isHidden = !this.isHidden;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
