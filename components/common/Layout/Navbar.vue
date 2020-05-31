<template>
  <!-- Checkout the variants customization bootstrap-vue/variants folder -->
  <b-navbar toggleable="lg" type="dark" variant="purple">
    <b-navbar-brand>
      <nuxt-link to="/" style="text-decoration: none">
        {{ $t('home.navbar') }}
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/introduction" class="text-light">
          Introduction
        </nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button
          v-if="$i18n.locale == 'en'"
          size="sm"
          style="border-radius: 2rem"
          variant="danger"
          @click="$i18n.locale = 'vi'"
        >
          <fa class="text-warning" :icon="['fas', 'globe-asia']" />
        </b-button>
        <b-button
          v-if="$i18n.locale == 'vi'"
          size="sm"
          style="border-radius: 2rem"
          variant="primary"
          @click="$i18n.locale = 'en'"
        >
          <fa :icon="['fas', 'globe-asia']" />
        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
