import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'

export default function Home() {
  
  return ( //Remember that this open parenthesis has to be on the same line on the return because front-end I guess
    <div className="container">
      <Head>
        <title>Guh's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Sidebar />
        <p>My work in progress blog. Currently working on: working buttons.</p>
      </main>
    </div>
  )
}
