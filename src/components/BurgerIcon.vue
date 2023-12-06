<template>  
    <div @click.stop="handleClick" class="burger-wrapper">
      <div class="burger" :class="{ 'burger--active': menuMobileActive }"></div>
    </div>
</template>

<script>
export default {
  props: {
    menuMobileActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClick() {
      console.log(this.menuMobileActive);
      this.$emit("burgerClick");
    },
  },
  emits: ["burgerClick"],
};
</script>

<style scoped>
.burger-wrapper {
  display: none;
}
.burger {
  position: relative;
  width: 26px;
  height: 2px;
  background: #fff;
  transition: 0.3s linear;
}
.burger.burger--active {
  background: transparent;
  transition: 0;
}
.burger::after,
.burger::before {
  content: "";
  position: absolute;
  width: 100%;
  height: inherit;
  background: inherit;
  left: 0;
  transition: 0.3s linear;
}
.burger.burger--active::after,
.burger.burger--active::before {
  content: "";
  position: absolute;
  width: 100%;
  height: inherit;
  background: #fff;
  left: 0;
  top: 0;
  bottom: 0;
}
.burger::after {
  top: -8px;
}
.burger.burger--active::after {
  transform: rotate(45deg);
}
.burger::before {
  bottom: -8px;
}
.burger.burger--active::before {
  transform: rotate(-45deg);
}

@media (max-width: 500px) {
  .burger-wrapper {
    display: block;
  }
}
</style>