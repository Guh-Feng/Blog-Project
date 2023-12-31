import Button from './Button'
import Content from './Content'
import SideDate from './SideDate'
import Settings from './Settings'
import styles from './ButtonsContainer.module.css'

export default function ButtonsContainer(){
    return(
        <>
            <Content />
            <SideDate />
            <div className={styles.buttonscontainer}>
                <Button title='Blog on Blogs' link='/posts/blog_post_on_posting_blogs' />
                <Button title='Thoughts About Computer Science' link='/posts/the_fields_of_computer_science' />
            </div>
            <Settings />
        </>
    )
}