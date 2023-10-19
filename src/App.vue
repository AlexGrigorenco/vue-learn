<template>
  <div class="container">
    <div class="bttn-wrapper">
      <div v-if="!posts.length">
        <my-button
          title="загрузить новый список постов"
          @click="getPostsFromApi"
        >
          получить посты
        </my-button>
      </div>
      <div>
        <my-button @click="modalVisible = true">Создать новый пост</my-button>
      </div>
    </div>

    <hr />

    <my-modal v-model:show="modalVisible">
      <create-post-form @createPost="createPost" />
    </my-modal>

    <div v-if="!posts.length" class="alert">Список постов пуст!</div>

    <div>
      <div class="sort-wrapper">
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
      <post-list v-if="posts.length" :posts="posts" @removePost="removePost" />
    </div>

    <my-loader v-if="loaderVisible" />
  </div>
</template>
<script>
import PostList from "@/components/PostList";
import CreatePostForm from "@/components/CreatePostForm";
import { getPosts } from "@/api";

export default {
  components: {
    PostList,
    CreatePostForm,
  },

  created() {
    this.getPostsFromApi();
  },

  data() {
    return {
      posts: [],
      modalVisible: false,
      loaderVisible: false,
      selectedSort: '',
      sortOptions: [
        {
          value: 'title',
          name: 'по заголовку'
        },
        {
          value: 'body',
          name: 'по описанию'
        }
      ]
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((postItem) => postItem.id !== post.id);
    },
    async getPostsFromApi() {
      this.loaderVisible = true;
      this.posts = await getPosts();
      this.loaderVisible = false;
    },
  },

  watch: {
    selectedSort(newValue){
      this.posts.sort((a, b) => {
        return a[newValue].localeCompare(b[newValue])
      })
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 50px 0;
  font-size: 20px;
}
.container {
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
}
.alert {
  color: red;
  text-align: center;
  font-size: 26px;
  animation: pulse 1s linear infinite;
}
.sort-wrapper,
.bttn-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px 0;
}
@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
