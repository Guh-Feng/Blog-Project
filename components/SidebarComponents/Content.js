import styles from './Content.module.css'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { DarkModeContextReturn } from '@components/Context'
 
const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function Content(){
    let {darkMode, changeDarkMode} = DarkModeContextReturn();
    return(
        <>
            <Link href="/" className={`${styles.content} ${darkMode ? styles.contentColorDarkMode : styles.contentColor} ${roboto.className}`}>
                GUH FENG
            </Link>
            <hr className={styles.line}></hr>
        </>
    )
}