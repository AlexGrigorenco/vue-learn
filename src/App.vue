<template>
  <div class="container">
    <div class="post-wrapper">
      <div class="post" v-for="post in posts">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div>
          <strong>Описание:</strong> {{ post.description }}</div>        
      </div>      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        posts: [
            {
                id:1,
                title: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni reprehenderit eaque a, odio eveniet, cumque doloribus velit beatae soluta vel dignissimos ex. Perspiciatis facilis distinctio a voluptates perferendis ea!',
            },
            {
                id:2,
                title: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni reprehenderit eaque a, odio eveniet ex. Perspiciatis facilis distinctio a voluptates perferendis ea!',
            },
            {
                id:3,
                title: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet, cumque doloribus velit beatae soluta vel dignissimos consectetur adipisicing elit. Labore magni reprehenderit eaque a, odio eveniet, cumque doloribus velit beatae soluta vel dignissimos ex. Perspiciatis facilis distinctio a voluptates perferendis ea!',
            },
            {
                id:4,
                title: 'JavaScript',
                description: 'Lorem ipsum dolor sit amet, cumque  a voluptates perferendis ea!',
            }
        ]
    };
  },
  methods: {},
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
}
.post-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.post {
  padding: 14px;
  border: 1px solid #656565;
  border-radius: 8px;
}
.post:hover {
  background: #f3f3f39c;
  border: 1px solid #6565655f;
  transition: 0.5s linear;
  cursor: default;
}
</style>
