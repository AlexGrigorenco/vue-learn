<template>
  <div class="container">
    <div class="bttn-wrapper">
      <transition name="fade">
        <div v-if="!posts.length">
            <my-button
            title="загрузить новый список постов"
            @click="getPostsFromApi"
          >
            получить посты
          </my-button>
        </div>
    </transition>
      <div>
        <my-button @click="modalVisible = true">Создать новый пост</my-button>
      </div>
    </div>

    <hr />

    <my-modal v-model:show="modalVisible">
      <create-post-form @createPost="createPost" />
    </my-modal>

    <transition name="fade">
      <div v-if="!posts.length" class="alert">Список постов пуст!</div>
    </transition>

    <div>
      <div class="sort-wrapper">
        <transition name="fade">
          <my-select
          v-model="selectedSort"
          :options="sortOptions"
          v-if="posts.length"
        />
        </transition>
        <transition name="fade">
          <my-input v-model:value="searchQuery" placeholder="поиск..." />
        </transition>
      </div>
      <post-list v-if="posts.length" :posts="sortedPosts" @removePost="removePost" />
    </div>

    <transition name="fade">
      <my-loader v-if="loaderVisible" />
    </transition>
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
      selectedSort: "",
      sortOptions: [
        {
          value: "title",
          name: "по заголовку",
        },
        {
          value: "body",
          name: "по описанию",
        },
      ],
      searchQuery:'',
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

  computed: {
    sortedPosts(){
      return this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },

  watch: {
    selectedSort(newValue) {
      this.posts.sort((a, b) => {
        return a[newValue].localeCompare(b[newValue]);
      });
    },
  },
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

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: .5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
