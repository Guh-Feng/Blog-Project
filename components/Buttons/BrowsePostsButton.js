import styles from './BrowsePostsButton.module.css'
import Link from 'next/link'

export default function BrowsePostsButton({title}){
    return(
        <Link href='/posts'>
            <button className={styles.browsePostsButton}>
                {title}
            </button>
        </Link>
    )
}