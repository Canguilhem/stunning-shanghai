<template>
  <b-card class="mb-2 background-color1" border-variant="secondary">
    <b-btn-close @click="deletePost">X</b-btn-close>
    <b-card-header
      header-tag="header"
      header-bg-variant="info"
      header-text-variant="white"
      class="p-1 text-center"
      role="tab"
    >{{ post.title }}</b-card-header>
    <b-card-body class="background-color2">
      <div class="tags-container text-center">
        <b-badge v-for="tag in post.tags" :key="tag" variant="dark">{{ tag }}</b-badge>
      </div>
      {{ post.thumbnail }}
      <b-img
        :src="post.thumbnail"
        thumbnail
        fluid
        alt="Responsive image"
      />
      <b-card-text class="text-center">{{ post.content }}</b-card-text>
    </b-card-body>
    <b-button type="edit" variant="outline-warning" @click="editPost">Edit this post</b-button>
  </b-card>
</template>
<script>
export default {
  name: "PostPreview",
  props: {
    post: {
      type: Object,
      default: () => [
        {
          title: "Post Title",
          thumbnail: "Path to post thumbnail",
          content: "This is the post content",
          tags: ["shopping", "food"]
        }
      ]
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    editPost(ev) {
      this.$emit('editPost', this.post)
    },
    deletePost(ev){
      this.$emit('deletePost', this.post)
    }
  }
};
</script>

<style scoped>
button {
  display:block;
  margin: auto;
  margin-top: 5px;
}
.tags-container {
  padding-bottom: 15px;
}
.card-header,
.card-body,
.card-footer {
  border-radius: 12px;
  margin-top: 2px;
}
</style>
