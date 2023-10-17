<template>
    <button>
            <slot></slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

button {
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 6px;
  background: rgb(84, 162, 84);
  border: 1px solid rgb(84, 162, 84);
  color: #fff;
}
button:hover {
  background: #fff;
  color: rgb(84, 162, 84);
  transition: 0.4s linear;
  transform: scale(1.05);
}
button:active{
    transform: scale(.5);
}

</style>