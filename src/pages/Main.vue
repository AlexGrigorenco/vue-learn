<template>
  <div class="container">
    <div :style="{ paddingBottom: '40px' }" v-if="posts.length">
      <div class="sort-wrapper">
        <transition name="fade">
          <my-select v-model="selectedSort" :options="sortOptions" />
        </transition>
        <transition name="fade">
          <my-input v-focus v-model:value="searchQuery" placeholder="поиск..." />
        </transition>
      </div>
      <post-list
        v-if="posts.length"
        :posts="sortedPosts"
        @removePost="removePost"
      />
    </div>
    <div v-intersection="getPostsFromApi" class="observer">
        <div v-if="loaderVisible" class="loader"></div>
    </div>
    <div class="bttn-wrapper">
      <transition name="fade">
        <div v-if="!posts.length">
          <my-button
            title="загрузить новый список постов"
            @click="getPostsFromApi(pageNumber)"
          >
            получить посты
          </my-button>
        </div>
      </transition>
    </div>

    <transition name="fade">
      <div v-if="!posts.length" class="alert">Список постов пуст!</div>
    </transition>
  </div>
</template>
  <script>
import PostList from "@/components/PostList";
import { getPosts } from "@/api";

export default {
  components: {
    PostList,
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
      searchQuery: "",
      postsBlock: 1,
    };
  },

  methods: {
    removePost(post) {
      this.posts = this.posts.filter((postItem) => postItem.id !== post.id);
    },
    async getPostsFromApi() {
      if(this.postsBlock > 20){
        return
      }
      this.loaderVisible = true;
      const newPosts = await getPosts(5, this.postsBlock);
      this.posts = [...this.posts, ...newPosts];
      this.postsBlock += 1;
      this.loaderVisible = false;
    },
  },

  computed: {
    sortedPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
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
  
  <style scoped>
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

.observer {
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
    position: relative;
    width: 10px;
    height: 10px;
    background: rgba(41, 85, 20, 0.9);
    animation: scale 1s linear infinite;
}
.loader::after,
.loader::before{
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background: inherit;
}
.loader::after {
    left: -30px;
    animation: scale .5s linear infinite;
}
.loader::before {
    right: -30px;
    animation: scale 1.5s linear infinite;
}

@keyframes scale {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(.3);
    }
    100% {
        transform: scale(1);
    }
}
</style>
  