import Sidebar from "@components/Sidebar"
import styles from "./the_fields_of_computer_science.module.css"

export default function the_fields_of_computer_science () { 
    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <p>
            It's my very first blog! I'm looking forward to writing about all kinds of things in the forseeable future, 
            and eventually forget about this little project when life inevitably gets in the way. Or we go down 
            the path of artificial intelligence taking all of our knowledge-based work and giving me ample time to do 
            anything I could ever dream of and more. It sure seems like it's any day now, where we might slip into a 
            really wacky kind of irreversible life-changing global experience that will dramatically disrupt mankind 
            as we know it. Even beyond AI, climate change and WW3 seems imminent. The future is all uncertain and 
            maybe it always has been.
            </p>
        </div>
    )
}