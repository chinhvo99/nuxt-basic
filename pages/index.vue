<template>
  <b-container fluid>
    <ExampleComponent />
    <p class="random-class">
      {{ $t('random-text') | slugify }}
    </p>
  </b-container>
</template>
<script>
export default {
  name: 'Home',
  components: {
    ExampleComponent: () =>
      import('~/components/specifics/Home/ExampleComponent.vue')
  },
  created() {
    // Global function and variable from mixins
    // this.sayHello("Rim")
    // console.log(this.baseUrl)
  },
  head() {
    return {
      title: 'Home page',
      description: 'A short dummy description'
    }
  }
}
</script>
<style lang="scss">
.random-class {
  color: $purple;
}
</style>
