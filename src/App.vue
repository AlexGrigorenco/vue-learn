<template>
    <div class="elem">
        <div>
            Количество лайков: <strong>{{likes}}</strong>
        </div>
    </div>
    <div class="elem">
        <div>
            Количество дизлайков: <strong>{{dislikes}}</strong>
        </div>
    </div>
    <div class="bttn-wrapper">
        <div>
            <button v-on:click="addLike">Like</button>
        </div>
        <div>
            <button @click="addDislike">Dislike</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            likes: 10,
            dislikes: 0,
        }
    },
    methods: {
        addLike(){
            this.likes +=1;
        },
        addDislike(){
            this.dislikes +=1;
        }
    }
}
</script>
<style scope>

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .elem{
        padding: 10px;
    }
    .bttn-wrapper{
        display: flex;
        gap: 10px;
        padding: 10px;
    }
    button{
        background: aqua;
        border: 1px solid aqua;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: bold;
    }
    button:hover{
        transform: translateY(2px) scale(.97);
        box-shadow: 2px 2px 4px #a8a4a4;
    }
    button:active{
        opacity: .5;
        transform: scale(.9);
    }
</style>