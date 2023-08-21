import styles from './BrowsePostsButton.module.css'
import Link from 'next/link'
import { DarkModeContextReturn } from '@components/Context'

export default function BrowsePostsButton({title}){
    let {darkMode, changeDarkMode} = DarkModeContextReturn();
    return(
        <Link href='/posts'>
            <button className={`${styles.browsePostsButton} ${darkMode ? styles.browsePostsButtonColorDarkMode : styles.browsePostsButtonColor}`}>
                {title}
            </button>
        </Link>
    )
}