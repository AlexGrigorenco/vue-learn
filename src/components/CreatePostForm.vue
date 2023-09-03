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
        <button @click="createPost">Создать</button>
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
form button {
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 6px;
  background: rgb(84, 162, 84);
  border: 1px solid rgb(84, 162, 84);
  color: #fff;
}
form button:hover {
  background: #fff;
  color: rgb(84, 162, 84);
  transition: 0.4s linear;
}
</style>
