/* eslint-disable */
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
        <h1>Admin Part</h1>
        <br>
        <p>Nombre de post : {{ posts.length }}</p>
        <b-button variant="outline-light" @click="show = true">Ajouter un post</b-button>
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div v-if="show" class="creation-form row">
      <!-- <div class="creation-form container-fluid"> -->
      <create-form @publishPost="publish" :defaultValues="post" :key="formKey"/>
    </div>
    <div class="background-color2">
      <h1 class="text-center">List of posts :</h1>
      <post-preview-list @editPost="editPost" @deletePost="deletePost" :posts="posts" :key="listKey"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostPreviewList from "~/components/admin/PostPreviewList.vue";
import CreateForm from "~/components/admin/CreatePostForm.vue";
export default {
  components: {
    PostPreviewList,
    CreateForm
  },
  data() {
    return {
      show: false,
      post: {
        title: '',
        thumbnail: '',
        content: '',
        tags: []
      },
      formKey:0,
      listKey:0
    };
  },
  methods:{
    async publish(payload) {
      const post = {
        title: payload.title,
        thumbnail: payload.path,
        content: payload.content,
        tags: payload.tags 
      }
      // console.log(payload);
      const res = await axios.post('http://localhost:3000/api/posts/', post);
    },
    async editPost(payload) {
      this.show = true;
      console.log(payload);
      this.post.title = payload.title;
      this.post.thumbnail = payload.thumbnail;
      this.post.content = payload.content;
      this.post.tags = payload.tags;
      this.rerenderForm()
      this.rerenderList()
    },
    async deletePost(payload){
      console.log("deleted Post with id", payload._id)
      const res = await axios.delete(`http://localhost:3000/api/posts/${payload._id}`)
      console.log(res)
      this.rerenderList()
    },
    rerenderForm(){
      this.formKey += 1
    },
    rerenderList(){
      this.listKey += 1
    }
  },
  async asyncData() {
    const { data } = await axios.get(`http://localhost:3000/api/posts/`);
    return { posts: data };
  }
};
</script>
<style scoped>
.row {
  display: block;
}
.creation-form {
  padding-block-end: 15px;
  margin-bottom: 0%;
}
</style>
