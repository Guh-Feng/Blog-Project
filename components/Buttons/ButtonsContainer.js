import Button from './Button'
import Content from './Content'
import styles from './ButtonsContainer.module.css'
import Link from 'next/link'

export default function ButtonsContainer(){
    return(
        <>
            <Content />
            <div className={styles.buttonscontainer}>
                <Link href="/posts/blog_post_on_posting_blogs"><Button title='Blog on Blogs'/></Link>
                <Link href="/posts/the_fields_of_computer_science"><Button title='Thoughts About Computer Science'/></Link>
            </div>
        </>
    )
}