import Head from 'next/head'
import styles from './homepage.module.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'
import BrowsePostsButton from '@components/HomePageComponents/BrowsePostsButton'
import { Roboto } from 'next/font/google'
import { DarkModeContextReturn } from '@components/Context'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  let {darkMode, changeDarkMode} = DarkModeContextReturn();

  return ( //Remember that this open parenthesis has to be on the same line on the return because front-end I guess
    <div className={styles.container}>
      <style jsx global>{`
      body {
        ${darkMode ? 'background: #434343' : 'background: #f6f6f6;'}
      }
    `}</style>
      <Head>
        <title>Guh's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className={styles.titleContainer}>
          <div className={`${darkMode ? styles.myNameDarkMode : styles.myName} ${roboto.className}`}>GUH FENG</div>
          <div className={`${darkMode ? styles.blueBarDarkMode : styles.blueBar}`}></div>
          <div className={`${darkMode ? styles.subtitleDarkMode : styles.subtitle} ${roboto.className}`}>Just Another Blog Project</div>
          <hr className={`${darkMode ? styles.lineLeftDarkMode : styles.lineLeft}`}></hr>
          <hr className={`${darkMode ? styles.lineRightDarkMode : styles.lineRight}`}></hr>
          <BrowsePostsButton title='Browse Posts' />
        </div>
      </main>
    </div>
  )
}
