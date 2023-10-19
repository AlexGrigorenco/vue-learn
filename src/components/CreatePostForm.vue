<template>
  <div class="form-wrapper">
    <form @submit.prevent>
      <my-input
        v-model:value="newPost.title"
        type="text"
        placeholder="Введите название поста"
      />
      <my-input
        v-model:value="newPost.body"
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

export default {

    data(){
        return{
            newPost: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
    createPost(){
        this.newPost.id = Date.now();
        this.$emit('createPost', this.newPost);

        this.newPost = {
                title: '',
                body: '',
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
</style>
