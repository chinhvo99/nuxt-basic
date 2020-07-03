<template>
  <b-container fluid>
    <ExampleComponent />
    <p class="random-class">
      {{ $t('random-text') | slugify }}
    </p>
    <p class="mt-5">
      {{ $t('random-text-using-grid') }}
      <span class="sx-10"></span>
      {{ $t('random-text-using-spacing') }}
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
    // console.log(this.mixinMessage)
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
