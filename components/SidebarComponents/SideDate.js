import styles from './SideDate.module.css'
import { Roboto } from 'next/font/google'
import { DarkModeContextReturn } from '@components/Context'
 
const roboto = Roboto({
    weight: ['700'],
    subsets: ['latin'],
})

export default function SideDate()
{
    let {darkMode, changeDarkMode} = DarkModeContextReturn();
    return(
        <div className={styles.monthYearContainer}>
            <div className={`${styles.monthYear} ${darkMode ? styles.monthColorDarkMode : styles.monthColor} ${roboto.className}`}>August</div>
            <div className={`${styles.monthYear} ${darkMode ? styles.yearColorDarkMode : styles.yearColor} ${roboto.className}`}>2023</div>
        </div>
    )
}
