<template>
  <div class="post-wrapper">
    <h3>Список Постов</h3>
    <transition-group name="list">
      <post-item
        @openPostInModal="openPostInModal"
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @removePost="$emit('removePost', post)"
      />
    </transition-group>
  </div>
  <my-modal v-model:show="modalVisible">
    <post-item @removePost="removePostInModal" :post="individualPost" />
  </my-modal>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      individualPost: {},
      modalVisible: false,
    };
  },
  methods: {
    openPostInModal(postData) {
      this.individualPost = postData;
      this.modalVisible = true;
    },
    removePostInModal() {
      this.$emit("removePost", this.individualPost);
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
.post-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list-item {
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from{
    opacity: 0;
    transform: translateX(100%);
}
.list-leave-to {
    opacity: 0;
  transform: scale(0);
}

.list-list-move {
  transition: transform 0.8s ease;
}


</style>
