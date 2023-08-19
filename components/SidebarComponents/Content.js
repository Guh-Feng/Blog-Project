import styles from './Content.module.css'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function Content(){
    return(
        <>
            <Link href="/" className={`${styles.content} ${roboto.className}`}>
                GUH FENG
            </Link>
            <hr className={styles.line}></hr>
        </>
    )
}