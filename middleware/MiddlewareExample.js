export default function({ store }) {
  console.log(store.state.message) // Run in server side first, client next time
}
