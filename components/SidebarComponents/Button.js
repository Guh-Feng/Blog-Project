import styles from './Button.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Button({title, link}){
    const { pathname } = useRouter();

    return(
        <Link href={link}>
            <button className={`${styles.button} ${(link === pathname) ? styles.selected : styles.notSelected }`}>
                {title}
            </button>
        </Link>
    )
}