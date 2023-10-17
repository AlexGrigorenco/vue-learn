<template>
  <div class="form-wrapper">
    <form @submit.prevent>
      <input
        v-model="newPost.title"
        type="text"
        placeholder="Введите название поста"
      />
      <input
        v-model="newPost.description"
        type="text"
        placeholder="Введите описание поста"
      />
      <div>
        <my-button @click="createPost">Создать</my-button>
      </div>
    </form>
  </div>
</template>

<script>

import MyButton from './UI/MyButton.vue';

export default {

  components: { 
    MyButton 
  },

    data(){
        return{
            newPost: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
    createPost(){
        this.newPost.id = Date.now();
        this.$emit('createPost', this.newPost);

        this.newPost = {
                title: '',
                description: '',
            }
    }
  },
};
</script>

<style scoped>
.form-wrapper {
  padding: 20px 10px;
  background: #f3f3f39c;
  border-radius: 8px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
}
form input {
  padding: 6px 2px;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #656565;
}
</style>
