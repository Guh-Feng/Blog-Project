import styles from './Settings.module.css'
import Image from 'next/image'
import { DarkModeContextReturn } from '@components/Context';

export default function Settings(){
    let {darkMode, changeDarkMode} = DarkModeContextReturn();
    
    return(
        <div className={styles.settingsContainer}>
            <hr className={styles.line}></hr>
            <button className={styles.darkMode} onClick={changeDarkMode}><Image src={darkMode ? "/light_sun_icon.png" : "/dark_moon_icon.png" } width={50} height={50} /></button>
        </div>
    )
}