import styles from './Button.module.css'
import Link from 'next/link'

export default function Button({title, link}){
    return(
        <Link href={link}>
            <button className={styles.button}>
                {title}
            </button>
        </Link>
    )
}