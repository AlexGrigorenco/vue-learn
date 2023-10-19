<template>
  <div class="load-wrapper">
    <div><span class="loader-60"> </span></div>
  </div>
</template>

<script>
export default {
        name: 'my-loader',
    }
</script>

<style scoped>
.load-wrapper{
    position: fixed;
    top: 0;right: 0;bottom: 0;left: 0;
    background: rgba(41, 85, 20, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;
}
.loader-60 {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: inline-block;
  position: relative;
  color: #fff;
  left: -30px;
  -webkit-animation: animloader60 2s ease infinite;
  animation: animloader60 2s ease infinite;
}
.loader-60::after,
.loader-60::before {
  content: "";
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #fff;
  position: absolute;
  left: 30px;
  top: 0;
  -webkit-animation: animloader60 2s 0.2s ease infinite;
  animation: animloader60 2s 0.2s ease infinite;
}
.loader-60::before {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  left: 60px;
}
@-webkit-keyframes animloader60 {
  0% {
    top: 0;
    color: white;
  }
  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    top: 0;
    color: white;
  }
}
@keyframes animloader60 {
  0% {
    top: 0;
    color: white;
  }
  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    top: 0;
    color: white;
  }
}
</style>
