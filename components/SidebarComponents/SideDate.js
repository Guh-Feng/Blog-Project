import styles from './SideDate.module.css'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
    weight: ['700'],
    subsets: ['latin'],
})

export default function SideDate()
{
    return(
        <div className={styles.monthYear}>
            <div className={`${styles.month} ${roboto.className}`}>August</div>
            <div className={`${styles.year} ${roboto.className}`}>2023</div>
        </div>
    )
}
