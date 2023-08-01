import styles from './Sidebar.module.css'
import { useState } from 'react';

export default function Sidebar() {
    const [hovering, setHovering] = useState(false);
    function setHoveringTrue(){
        setHovering(true);
    }
    function setHoveringFalse(){
        setHovering(false);
    }
    
    return (
        <div onMouseOver={setHoveringTrue} onMouseOut={setHoveringFalse} className={`${styles.sidebar} ${hovering ? styles.shown : styles.hidden}`} >
            Sample text.
        </div>
    )
}