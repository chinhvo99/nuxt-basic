const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  async nuxtServerInit({ commit }, { req }) {
    let auth = null
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
      // we simulate the async request with timeout.
      const auth = {
        currentUser: {
          name: 'Someone'
        },
        accessToken: 'yourAccessTokenFromBackend'
      }
      Cookie.set('auth', auth) // saving token in cookie for server rendering
      commit('SET_AUTH', auth) // mutating to store for client rendering
    }, 1000)
  },
  async logout({ commit }) {
    await Cookie.remove('auth')
    commit('SET_AUTH', null)
  }
}
