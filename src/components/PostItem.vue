<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong> {{ post.title }}</div>
        <div>
          <strong>Описание:</strong> {{ post.description }}</div>        
      </div>  
      <div>
        <my-button>Удалить</my-button>
      </div>
        </div> 
</template>

<script>

import MyButton from './UI/MyButton.vue';

    export default {
  components: { 
    MyButton 
},

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

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.post:hover {
  background: #f3f3f39c;
  border: 1px solid #6565655f;
  transition: 0.5s linear;
  cursor: default;
}


@media (max-width: 500px) {
    .post{
        flex-direction: column;
        align-items: flex-end;
    }
}
</style>