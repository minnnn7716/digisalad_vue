<script>
import NavbarComp from '@/components/NavbarComp.vue';

export default {
  data() {
    return {
      navbarStatus: false,
    };
  },
  components: {
    NavbarComp,
  },
  methods: {
    toggleNav() {
      const scrollTop = window.scrollY;
      const position = window.innerHeight / 2;

      if (scrollTop > position) {
        this.navbarStatus = 'show';
      } else {
        this.navbarStatus = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.toggleNav);
  },
};
</script>

<template>
  <NavbarComp :isShow="navbarStatus" />
  <RouterView />
</template>

<style scoped>
</style>
