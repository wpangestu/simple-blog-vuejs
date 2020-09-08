<template>
  <div id="add-blog">
    <h2>Add new blog</h2>
    <form>
        <label>Blog Title:</label>
        <input v-model.lazy="blog.title" type="text">
        <label>Blog Content: </label>
        <textarea v-model.lazy='blog.content'></textarea>
        <div id="checkboxes">
            <p>Blog Categories</p>
            <label>Cat1</label>
            <input type="checkbox" value="cat1" v-model="blog.categories"/>
            <label>Cat2</label>
            <input type="checkbox" value="cat2" v-model="blog.categories"/>
            <label>Cat3</label>
            <input type="checkbox" value="cat3" v-model="blog.categories"/>
            <label>Cat4</label>
            <input type="checkbox" value="cat4" v-model="blog.categories"/>
        </div>
    </form>
    <div id="preview">
        <h3>Privew Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Categories</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>

    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
        blog:{
            title:'',
            content:'',
            categories:[]
        }
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
