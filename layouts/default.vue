<template>
  <b-container fluid class="p-0">
    <Navbar />
    <nuxt />
    <Login />
    <Footer />
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  components: {
    Login: () => import('~/components/common/Auth/Login.vue'),
    Navbar: () => import('~/components/common/Layout/Navbar.vue'),
    Footer: () => import('~/components/common/Layout/Footer.vue')
  },
  methods: {
    ...mapMutations({
      SET_LANG: 'SET_LANG'
    })
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem('locale')
    this.SET_LANG(localStorage.getItem('locale')) // store in state and localStorage
  }
}
</script>
