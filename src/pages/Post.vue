<template>
  <div class="container">
    <div class="button-wrapper">
      <my-button v-if="parseInt($route.params.id) !== 1" 
      @click="nextPost('prev')"
        >предыдущий пост</my-button
      >

      <my-button
        v-if="parseInt($route.params.id) !== 100"
        @click="nextPost('next')"
        >следующий пост</my-button
      >
    </div>

    <h1>{{ post.title }}</h1>
    <p>
      {{ post.body }}
    </p>
    <div class="id">{{ post.id }}</div>
  </div>
  <transition name="fade">
    <my-loader v-if="loaderVisible" />
  </transition>
</template>

<script>
import { getPost } from "@/api";
import MyButton from "@/components/UI/MyButton.vue";
export default {
  components: { MyButton },
  data() {
    return {
      post: {},
      loaderVisible: false,
    };
  },
  mounted() {
    this.getPostFromApi(this.$route.params.id);
  },
  methods: {
    async getPostFromApi(id) {
      this.loaderVisible = true;
      this.post = await getPost(id);
      this.loaderVisible = false;
      console.log(typeof this.post.id);
    },
    nextPost(direction) {
      const nextPostId = direction === 'next' ? parseInt(this.$route.params.id) + 1 : parseInt(this.$route.params.id) - 1;
      this.$router.push(`/post/${nextPostId}`);
      this.getPostFromApi(nextPostId);
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
h1 {
  text-transform: uppercase;
}
p {
  padding: 20px 0;
}
.id {
  padding: 20px 0;
  text-align: right;
}
</style>