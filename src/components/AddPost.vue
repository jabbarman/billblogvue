<template>
    <div>
        <form id="form" v-on:submit.prevent="processForm(form)">
            Title:<br>
            <input type = "text" name="title" v-model="form.title" >
            <br>
            Body:<br>
            <textarea name="body" v-model="form.body"></textarea>
            <br><br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddPost",
        data() {
            return {
                form: {
                    title: '',
                    body: ''
                },
            };
        },
        methods : {
            processForm: function () {
                const post = {title: this.form.title, body : this.form.body};
                if (!this.$store.state.token) { //  if we haven't already got a authentication token then get one!
                    this.$store.dispatch('authenticate')
                }
                this.$store.dispatch('addNewPost', Object.assign({}, post));
            }
        }
    }

</script>

<style scoped>

</style>