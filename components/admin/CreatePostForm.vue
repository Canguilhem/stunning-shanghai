<template>
  <section class="form background-color2">
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-row>
        <b-col>
          <b-form-input id="title" v-model="form.title" required placeholder="Post Title"/>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-input id="path" v-model="form.path" required placeholder="Image path"/>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-textarea
            id="content"
            v-model="form.content"
            required
            placeholder="Write your story here"
          />
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <b-form-textarea
            id="photoDescription"
            v-model="form.photoDescription"
            required
            placeholder="Describe your photo"
          />
        </b-col>
      </b-form-row>
      <b-form-group label-cols-lg="3" id="tags" label="Tags:" label-align="left" label-for="tags">
        <div class="tags-container">
          <b-badge v-for="tag in form.tags" :key="tag" variant="dark" class="tagBadge">{{ tag }}</b-badge>
        </div>
        <b-form-select v-model="form.tags" :options="options" multiple :select-size="4"/>
      </b-form-group>
      <div class="buttons">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </section>
</template>
<script>
export default {
  name: "CreatePostForm",
  props: ['defaultValues'],
  data() {
    return {
      // Array reference
      options: [
        { value: "food", text: "food" },
        { value: "city", text: "city" },
        { value: "technology", text: "technology" },
        { value: "shopping", text: "shopping" }
      ],
      form: {
        title: this.defaultValues.title,
        path: this.defaultValues.thumbnail,
        photoDescription: this.defaultValues.photoDescription,
        content: this.defaultValues.content,
        tags: this.defaultValues.tags
      },
      show: true
    };
  },
  methods: {
    onSubmit() {
      this.$emit("publishPost", this.form)
    },
    onReset() {
      // Reset our form values
      this.form.title = "";
      this.form.path = "";
      this.form.content = "";
      this.form.photoDescription = "";
      this.form.tags = [];
    }
  },
  destroyed() {
    console.log("destroyed")
  }
};
</script>

<style scoped>
textarea {
  height: 10em;
}
.tagBadge {
  margin-left: 5px;
}
section {
  padding: 25px;
}
.form {
  width: 80%;
  margin: auto;
}
.form-control,
select {
  margin-top: 5px;
}
.buttons {
  margin: auto;
  display: block;
}
</style>
