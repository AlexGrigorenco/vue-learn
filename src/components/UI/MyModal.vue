<template>
    <div 
    class="wrapper" 
    v-if="show"
    @click="hideModal">
        <div 
        @click.stop
        class="content">
            <div 
            @click.stop="hideModal"
            class="close-modal"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'my-modal',

        props: {
            show: {
                type: Boolean,
                default: false,
            }
        },

        methods: {
            hideModal(){
                this.$emit('update:show', false)
            }
        }
        
    }
</script>

<style scoped>

.wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(41, 85, 20, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;
}
.content{
    position: relative;
    padding: 30px;
    border-radius: 8px;
    background: #fff;

    min-width: 200px;
    min-height: 200px;

    max-width: 70%;
}

.close-modal{
    cursor: pointer;
    position: relative;
    position: absolute;
    top: 16px;
    right: 10px;

    height: 18px;
    width: 18px;
    transition: .3s linear;
}
.close-modal:hover{
    transform: scale(1.1);
}
.close-modal:active{
    transform: scale(.3);
}
.close-modal::after{
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    background: red;
    transform: rotate(45deg);
}
.close-modal::before{
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    background: red;
    transform: rotate(-45deg);
}

@media(max-width:500px){
    .content{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: 100%;
    }
}

</style>