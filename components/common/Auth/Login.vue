<template>
  <b-modal id="sign-in-modal" title="Sign in to access the secret page">
    <b-form-group>
      <b-form-input
        class="mb-3"
        type="email"
        placeholder="Enter email"
      ></b-form-input>
      <b-form-input
        class="mb-3"
        type="password"
        placeholder="Enter password"
      ></b-form-input>
      <b-button variant="purple" @click="postLogin">
        login
      </b-button>
    </b-form-group>
    <template v-slot:modal-footer>
      <span></span>
    </template>
  </b-modal>
</template>
<script>
export default {
  // Back to home if you've already been authenticated
  methods: {
    async postLogin() {
      await this.$store.dispatch('login')
      this.$root.$emit('bv::hide::modal', 'sign-in-modal', '#focusThisOnClose')
    }
  }
}
</script>
