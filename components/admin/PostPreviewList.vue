<template>
  <div class="previewlist" role="tablist">
    <b-card-group columns>
      <post-preview 
        v-for="(post, index) in posts" :key="post._id" 
        @editPost="editPost"
        @deletePost="deletePost"
        :post="post" 
        :index="index" />
    </b-card-group>
  </div>
</template>
<script>
import PostPreview from './PostPreview.vue'
export default {
  name: 'PostPreviewList',
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      default: () => [
        // {
        //   title: 'Post Title',
        //   thumbnail: 'Path to post thumbnail',
        //   content: 'This is the post content',
        //   tags: ['shopping', 'food']
        // }
      ]
    }
  },
  methods: {
    editPost(payload) {
      this.$emit("editPost", payload)
    },
    deletePost(payload){
      this.$emit('deletePost', payload)
    }
  }
}
</script>
<style scoped>
.previewlist{
  margin: auto;
  padding: 10px 0px;
}
.card-columns {
  padding: 0px 10px;
}
</style>
