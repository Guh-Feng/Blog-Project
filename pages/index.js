import Head from 'next/head'
import styles from './homepage.module.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'
import BrowsePostsButton from '@components/Buttons/BrowsePostsButton'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  
  return ( //Remember that this open parenthesis has to be on the same line on the return because front-end I guess
    <div className="container">
      <Head>
        <title>Guh's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className={styles.titleContainer}>
          <div className={`${styles.myName} ${roboto.className}`}>GUH FENG</div>
          <div className={styles.blueBar}></div>
          <div className={`${styles.subtitle} ${roboto.className}`}>Just Another Blog Project</div>
          <hr className={styles.lineLeft}></hr>
          <hr className={styles.lineRight}></hr>
          <BrowsePostsButton title='Browse Posts' />
        </div>
      </main>
    </div>
  )
}
