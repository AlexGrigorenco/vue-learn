<template>
  <div class="container">
    <div class="post-wrapper">
      <div class="post" v-for="post in posts">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div>
          <strong>Описание:</strong> {{ post.description }}</div>        
      </div>      
    </div>
    <div class="form-wrapper">
        <form @submit.prevent>
            <input 
            @input="newPost.title = $event.target.value"
            v-bind:value="newPost.title"
            type="text" 
            placeholder="Введите название поста">
            <input 
            @input="newPost.description = $event.target.value"
            v-bind:value="newPost.description"
            type="text" 
            placeholder="Введите описание поста">
            <div>
                <button @click="createPost">Создать</button>
            </div>
        </form>
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
        ],
        newPost: {
            title: '',
            description: '',
        },
    };
  },
  methods: {
    createPost(){
        const newPost = {...this.newPost};
        newPost.id = Date.now();
        this.posts.push(newPost);

        this.newPost.title = '';
        this.newPost.description = '';
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
.form-wrapper{
    padding: 20px 10px;
    background: #f3f3f39c;
    border-radius: 8px;
}
form{
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: #fff;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
}
form input{
    padding: 6px 2px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #656565;
}
form button{
    padding: 6px 10px;
    font-size: 18px;
    border-radius: 6px;
    background: rgb(84, 162, 84);
    border: 1px solid rgb(84, 162, 84);
    color: #fff;
}
form button:hover{
    background: #fff;
    color: rgb(84, 162, 84);
    transition: .4s linear;
}
</style>
