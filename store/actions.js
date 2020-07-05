const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  // This will run first when nuxt app init
  async nuxtServerInit({ commit }, { req }) {
    let auth = null
    // Since we don't have localStorage in server side, we gotta use cookie instead
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('SET_AUTH', auth)
  },
  async login({ commit }) {
    setTimeout(() => {
      // We simulate the async request with timeout.
      // Replace the whole thing with a nice axios request to obtain the auth instance as usual
      // This use a constain as an example
      const auth = {
        currentUser: {
          name: 'Someone'
        },
        accessToken: 'yourAccessTokenFromBackend'
      }
      Cookie.set('auth', auth, { expires: 365 }) // Saving token in cookie for server rendering
      commit('SET_AUTH', auth) // Mutating to store for client rendering
    }, 1000)
  },
  async logout({ commit }) {
    await Cookie.remove('auth')
    commit('SET_AUTH', null)
  }
}
