<template>
  <div id="add-blog">
    <h2>Add new blog</h2>
    <form>
        <label>Blog Title:</label>
        <input v-model.lazy="blog.title" type="text">
        <label>Blog Content: </label>
        <textarea v-model.lazy='blog.content'></textarea>
    </form>
    <div id="preview">
        <h3>Privew Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
        blog:{
            title:'',
            content:''
        }
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
