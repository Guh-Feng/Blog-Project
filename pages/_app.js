import '@styles/globals.css'
import Layout from '@components/Layout'
import Context from '@components/Context'

function Application({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  ) 
}

export default Application
