<template>
  <div class="container">
    <post-list :posts="posts" />
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
</style>
