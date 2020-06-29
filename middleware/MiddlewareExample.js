export default function({ store }) {
  console.log(store.state.message)
  if (process.browser) {
    localStorage.setItem('helloMessage', 'Hello from local storage')
    console.log(localStorage.getItem('helloMessage'))
  }
}
