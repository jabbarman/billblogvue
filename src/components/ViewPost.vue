<template>
    <div v-if="blog">
        <div id="title">
            {{blog[postId].post.title}}
        </div>
        <div id="body">
            {{blog[postId].post.body}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViewPost",
        created() {
            this.$store.dispatch('viewPost');
        },
        computed : {
            blog() {
                return this.$store.state.viewPost;
            },
            postId() {
                return this.$store.state.postId;
            }
        },
    }
</script>

<style scoped>

</style>