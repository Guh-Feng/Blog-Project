import styles from './Content.module.css'
import Link from 'next/link'

export default function Content(){
    return(
        <Link href="/">
        <div className={styles.content}>
            Contents
            {/*<hr className={styles.line}></hr>*/}
        </div>
        </Link>
    )
}