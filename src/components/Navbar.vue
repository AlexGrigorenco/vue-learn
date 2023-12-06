<template>
  <div @click="menuMobileActive = false" class="navbar">
    <div class="container">
      <div class="nav-wrapper">
        <div @click="$router.push('/')" class="logo">Vue 3</div>
        <div v-if="displayMobile" class="links-wrapper">
          <my-button v-for="link in links" :key="link.id" @click="$router.push(`${link.link}`)">{{ link.title }}</my-button>
        </div>
        <burger-icon :menuMobileActive="menuMobileActive" @burgerClick="clickOnBurger"/>
      </div>
    </div>
    <menu-mobile :menuMobileActive="menuMobileActive" :links="links" :displayMobile="displayMobile"/>
  </div>
</template>

<script>
import BurgerIcon from '@/components/BurgerIcon.vue';
import MenuMobile from '@/components/MenuMobile.vue';
export default {
  components: {
    BurgerIcon, MenuMobile,
  },
  mounted() {
    this.checkWindowWidth();
    window.addEventListener('resize', this.checkWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowWidth);
  },
  data() {
    return {
      displayMobile: false,
      menuMobileActive: false,
      links: [
        {
          id: 1,
          title:'Pagination',
          link: '/pagination'
        },
        {
          id: 2,
          title: 'About',
          link: '/about',
        }
      ]
    }
  },
  methods: {
    checkWindowWidth(){
      this.displayMobile = window.innerWidth > 500 ? true : false;
      this.menuMobileActive = false;
    },
    clickOnBurger() {
      this.menuMobileActive = !this.menuMobileActive;
    }
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  padding: 20px 0;
  background: rgba(41, 85, 20, 0.9);
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
  transition: 0.2s linear;
}
.logo:hover {
  color: #fff;
}
.links-wrapper {
  display: flex;
  gap: 20px;
}
</style>