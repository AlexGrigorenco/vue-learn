<template>
  <div class="container">

    <div 
    v-if="!posts.length"
    class="alert">
      Список постов пуст!
    </div>

    <post-list 
    v-if="posts.length"
    :posts="posts"
    @removePost="removePost" />
    <create-post-form @createPost="createPost" />
  </div>
</template>
<script>

import PostList from "@/components/PostList";
import CreatePostForm from "@/components/CreatePostForm";

export default {
  components: {
    PostList,
    CreatePostForm,
  },

  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni reprehenderit eaque a, odio eveniet, cumque doloribus velit beatae soluta vel dignissimos ex. Perspiciatis facilis distinctio a voluptates perferendis ea!",
        },
        {
          id: 2,
          title: "JavaScript",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni reprehenderit eaque a, odio eveniet ex. Perspiciatis facilis distinctio a voluptates perferendis ea!",
        },
        {
          id: 3,
          title: "JavaScript",
          description:
            "Lorem ipsum dolor sit amet, cumque doloribus velit beatae soluta vel dignissimos consectetur adipisicing elit. Labore magni reprehenderit eaque a, odio eveniet, cumque doloribus velit beatae soluta vel dignissimos ex. Perspiciatis facilis distinctio a voluptates perferendis ea!",
        },
        {
          id: 4,
          title: "JavaScript",
          description:
            "Lorem ipsum dolor sit amet, cumque  a voluptates perferendis ea!",
        },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post){
      this.posts = this.posts.filter(postItem => postItem.id !== post.id);
    }
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
.alert{
  color: red;
  text-align: center;
  font-size: 26px;
  animation: pulse 1s linear infinite ;
}
@keyframes pulse {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
