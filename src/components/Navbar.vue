<template>
    <div class="navbar">
        <div class="container">
            <div class="nav-wrapper">
        <div @click="$router.push('/')" class="logo">
            Vue 3
        </div>
        <div class="links-wrapper">
            <my-button @click="$router.push('/pagination')">Pagination</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
        </div>
    </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar {
        padding: 20px 0;
        background: rgba(41, 85, 20, 0.5);
    }
    .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        font-size: 26px;
        font-weight: 700;
        text-shadow: 0 0 3px rgba(41, 85, 20, 0.5);
        cursor: pointer;
        transition: .2s linear;
    }
    .logo:hover {
        color: #fff;
    }
    .links-wrapper {
        display: flex;
        gap: 20px;
    }
</style>