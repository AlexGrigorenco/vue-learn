<template>
    <div class="post-wrapper">
        <h3>Список Постов</h3>
         <post-item 
         @openPostInModal="openPostInModal"
         v-for="post in posts"
         :key="post.id"
         :post="post"
         @removePost="$emit('removePost', post)"
         />
    </div>
    <my-modal
    v-model:show="modalVisible">
        <post-item 
        @removePost="removePostInModal"
        :post="individualPost"/>
    </my-modal>
</template>

<script>
    import PostItem from '@/components/PostItem'
    export default {
        components: {
            PostItem,
        },

        props: {
            posts: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
                individualPost: {},
                modalVisible: false,
            }
        },
        methods: {
            openPostInModal(postData){
                this.individualPost = postData;
                this.modalVisible = true;
            },
            removePostInModal(){
                this.$emit('removePost', this.individualPost);
                this.modalVisible = false;
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


</style>