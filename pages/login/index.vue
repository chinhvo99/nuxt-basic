<template>
  <div class="container">
    <h1 class="text-purple">
      {{ $t('login.title') }}
    </h1>
    <div>
      <b-form-group>
        <b-form-input
          class="mb-3"
          type="email"
          :placeholder="$t('login.email')"
        ></b-form-input>
        <b-form-input
          class="mb-3"
          type="password"
          :placeholder="$t('login.password')"
        ></b-form-input>
        <b-button variant="purple" @click="postLogin">
          {{ $t('login.button') }}
        </b-button>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  // Back to home if you've already been authenticated
  middleware: 'authNotRequired',
  methods: {
    async postLogin() {
      await this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>
