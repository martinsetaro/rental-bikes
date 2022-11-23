import '../src/style/global.css'
import '../src/style/normalize.css'
import AppContext from './AppContext'

function MyApp({ Component, pageProps }) {

  return(
    <AppContext>
  <Component {...pageProps} />
 </AppContext>
 )
}

export default MyApp
