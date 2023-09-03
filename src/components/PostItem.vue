<template>
    <div class="post">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div>
          <strong>Описание:</strong> {{ post.description }}</div>        
      </div>   
</template>

<script>
    export default {
        props: {
            post:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
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