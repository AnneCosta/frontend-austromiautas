export default function ({ store, redirect }) {
  if (!process.server) {
    if (store.state.user.isLoggedIn === true) {
      redirect('/meus-pets')
    }
  }
}
