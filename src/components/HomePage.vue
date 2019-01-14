<template>
    <div v-if="blog">
        <span>Message : {{blog.message}}</span>
        <div class="post" v-for="post in blog.posts" :key="post.id">
            <ul>
                <li>id : {{post.id}}</li>
                <li>title : <a v-bind:href="post.links.href">{{post.title}}</a></li>
                <li>creator : {{post.creator}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
//import blog from '../data/posts';

export default {
    name: 'HomePage',
    created() {
      this.$store.dispatch('getAllPosts');
    },
    computed : {
        blog() {
            return this.$store.state.allPosts;
        },
    },
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
