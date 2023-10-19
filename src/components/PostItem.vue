<template>
    <div 
    @click="openPostInModal"
    class="post">
        <div class="post-content-wrapper">
            <div class="title">
               {{ post.title }}
            </div>
        <div class="post-text">
           {{ post.body }}
          </div>        
      </div>  
      <div>
        <my-button
        @click.stop="$emit('removePost', post)"
        >Удалить</my-button>
      </div>
        </div> 
</template>

<script>

export default {

    props: {
        post:{
            type: Object,
            required: true,
        }
    },
    methods: {
      openPostInModal(){
        this.$emit('openPostInModal', this.post)
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
  justify-content: space-between;
  gap: 20px;
}
.post:hover {
  background: #f3f3f39c;
  border: 1px solid #6565655f;
  box-shadow: 2px 2px 10px green;
  transition: 0.5s linear;
  cursor: default;
  transform: translateY(-2px);
}
.title{
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.post-text{
  font-size: 18px;
  line-height: 140%;
}
.post-content-wrapper{
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
}


@media (max-width: 500px) {
    .post{
        flex-direction: column;
        align-items: flex-end;
    }
}
</style>