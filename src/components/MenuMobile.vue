<template>
    <Transition name="slide-in-left">
        <div v-if="!displayMobile && menuMobileActive" class="menu-mobile">
            <my-button v-for="link in links" :key="link.id" @click="$router.push(`${link.link}`)">{{ link.title }}</my-button>
        </div>
    </Transition>
</template>

<script>
    export default {
        props: {
            links:{
                type: Array,
                required: true,
            },
            displayMobile: {
                type: Boolean,
                required: true,
            },
            menuMobileActive: {
                type: Boolean,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .menu-mobile {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 20px 15px;
        width: 100%;
        transform: translateY(100%);
        background: rgba(41, 85, 20, 0.9);

        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: flex-end;
    }
    .slide-in-left-enter-active,
    .slide-in-left-leave-active {
        transition: .3s linear;
    }
    .slide-in-left-enter-from {
        transform: translateX(100%) translateY(100%);
    }
    .slide-in-left-leave-to {
        transform: translateX(-100%) translateY(100%);
    }
</style>