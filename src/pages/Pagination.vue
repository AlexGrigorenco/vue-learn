<template>
    <div class="container">
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
  
      <div v-if="posts.length">
        <div class="flex-container">
          <div class="bttn-wrapper">
          <div v-if="pageNumber !== 1">
            <my-button @click="prevPage" >предыдущая страница</my-button>
          </div>
          <div v-if="pageNumber !== 1 && pageNumber !== 10" class="page">
            {{ pageNumber }}
          </div>
          <div v-if="pageNumber !== 10">
            <my-button @click="nextPage" >следующая страница</my-button>
          </div>
        </div>
        <div class="sort-wrapper">
          <transition name="fade">
            <my-select
            v-model="selectedSort"
            :options="sortOptions"
          />
          </transition>
          <transition name="fade">
            <my-input v-focus v-model:value="searchQuery" placeholder="поиск..." />
          </transition>
        </div>
        </div>
        <post-list v-if="posts.length" :posts="sortedPosts" @removePost="removePost" />
        <div class="pages">
          <div v-for="page in pages" :key="page" @click="changePage(page)" class="page" :class="{'current-page': page === pageNumber,}">{{ page }}</div>
        </div>
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
      this.getPostsFromApi(this.pageNumber);
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
        pageNumber: 1,
        pages: 10,
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
      async getPostsFromApi(page) {
        this.loaderVisible = true;
        this.posts = await getPosts(10, page);
        this.loaderVisible = false;
      },
      prevPage() {
        this.pageNumber -= 1;
        this.getPostsFromApi(this.pageNumber);
      },
      nextPage() {
        this.pageNumber += 1;
        this.getPostsFromApi(this.pageNumber);
      },
      changePage(page){
        this.pageNumber = page;
        this.getPostsFromApi(this.pageNumber);
      }
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
  
  <style scoped>
  .alert {
    color: red;
    text-align: center;
    font-size: 26px;
    animation: pulse 1s linear infinite;
  }
  .flex-container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
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
  
  .pages {
    padding: 20px 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .page {
    padding: 6px;
    border: 1px solid green;
    cursor: pointer;
    border-radius: 4px;
  }
  .current-page,
  .page:hover {
    box-shadow: 2px 2px 10px green;
    transition: 0.5s linear;
    transform: translateY(-2px);
  }
  .current-page {
    color: green;
    font-weight: bold;
    font-size: 20px;
    cursor: default;
    pointer-events: none;
  }
  </style>
  