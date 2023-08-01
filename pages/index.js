import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Guh's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Sidebar />
        <p className="description">
          My work in progress blog. Currently working on: sidebar
        </p>
      </main>
    </div>
  )
}
