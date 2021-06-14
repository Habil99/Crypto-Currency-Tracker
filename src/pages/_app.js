import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import NProgress from '../components/NProgress'
import store from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NProgress />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
