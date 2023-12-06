<template>
  <div class="container">
    <div :style="{ paddingBottom: '40px' }" v-if="posts.length">
      <div class="sort-wrapper">
        <transition name="fade">
          <my-select v-model="selectedSort" :options="sortOptions" />
        </transition>
        <transition name="fade">
          <my-input v-model:value="searchQuery" placeholder="поиск..." />
        </transition>
      </div>
      <post-list
        v-if="posts.length"
        :posts="sortedPosts"
        @removePost="removePost"
      />
    </div>
    <div ref="observer" class="observer"></div>
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
    <transition name="fade">
      <my-loader v-if="loaderVisible" />
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

  mounted() {
    const options = {
      root: null,
      rootMargin: "30px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.postsBlock <= 20) {
        this.getPostsFromApi(this.postsBlock);
        this.postsBlock += 1;
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
    async getPostsFromApi(page) {
      this.loaderVisible = true;
      const newPosts = await getPosts(5, page);
      this.posts = [...this.posts, ...newPosts];
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
  transition: 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
  