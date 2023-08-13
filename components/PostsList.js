import styles from './PostsList.module.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function PostsList(){
    return (
        <>
            <hr className={styles.sideline}></hr>
            <div className={styles.postsList}>
                <div className={`${styles.title} ${roboto.className}`}>Blog Posts</div>
                <div className={`${styles.year} ${roboto.className}`}>2023</div>
                <div className={`${styles.month} ${roboto.className}`}>August</div>
                <Link href='/posts/blog_post_on_posting_blogs' className={`${styles.postLinks} ${roboto.className}`}>Blog Post on Posting Blogs</Link>
                <Link href='/posts/the_fields_of_computer_science' className={`${styles.postLinks} ${roboto.className}`}>Thoughts on Computer Science</Link>
            </div>
        </>
    )
}