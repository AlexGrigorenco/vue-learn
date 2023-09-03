<template>
    <div class="post-wrapper">
        posts
      <div class="post" v-for="post in posts">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div>
          <strong>Описание:</strong> {{ post.description }}</div>        
      </div>      
    </div>
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

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