import styles from './Button.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DarkModeContextReturn } from '@components/Context';

export default function Button({title, link}){
    const { pathname } = useRouter();
    let {darkMode, changeDarkMode} = DarkModeContextReturn();

    return(
        <Link href={link}>
            <button className={`${styles.button} ${darkMode ? styles.buttonColorDarkMode : styles.buttonColor} ${darkMode ? (link === pathname) ? styles.selectedDarkMode : styles.nothing : (link === pathname) ? styles.selected : styles.nothing}`}>
                {title}
            </button>
        </Link>
    )
}