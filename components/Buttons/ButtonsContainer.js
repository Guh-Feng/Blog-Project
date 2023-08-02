import Button from './Button'
import Content from './Content'
import styles from './ButtonsContainer.module.css'

export default function ButtonsContainer(){
    return(
        <>
            <Content />
            <div className={styles.buttonscontainer}>
                <Button title='Blog on Blogs'/>
                <Button title='Thoughts About Computer Science'/>
                <Button title='Trying New Colors'/>
                <Button title='Another Color Please'/>
                <Button title='More Colors'/>
                <Button title="Let's see it in action."/>
                <Button title='What in the world?'/>
            </div>
        </>
    )
}