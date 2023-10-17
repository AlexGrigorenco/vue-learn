<template>
    <div class="post-wrapper">
        <h3>Список Постов</h3>
         <post-item 
         v-for="post in posts"
         :key="post.id"
         :post="post"
         @removePost="$emit('removePost', post)"
         />
    </div>
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