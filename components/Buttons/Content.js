import styles from './Content.module.css'
import Link from 'next/link'

export default function Content(){
    return(
        <>
            <Link href="/" className={styles.content}>
                Guh's Blogs
            </Link>
            <hr className={styles.line}></hr>
        </>
    )
}