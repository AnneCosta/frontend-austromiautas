export default function ({ store, redirect }) {
  if (store.state.user.isLoggedIn === false) {
    redirect('/entrar')
  }
}
