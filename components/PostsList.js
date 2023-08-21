import styles from './PostsList.module.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { DarkModeContextReturn } from './Context'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function PostsList(){
    let {darkMode, changeDarkMode} = DarkModeContextReturn();
    return (
        <>
            <hr className={`${darkMode ? styles.sidelineDarkMode : styles.sideline}`}></hr>
            <div className={styles.postsList}>
                <div className={`${styles.title} ${darkMode ? styles.normalTextColorDarkMode : styles.normalTextColor} ${roboto.className}`}>Blog Posts</div>
                <div className={`${styles.year} ${darkMode ? styles.normalTextColorDarkMode : styles.normalTextColor} ${roboto.className}`}>2023</div>
                <div className={`${styles.month} ${darkMode ? styles.normalTextColorDarkMode : styles.normalTextColor} ${roboto.className}`}>August</div>
                <Link href='/posts/blog_post_on_posting_blogs' className={`${darkMode ? styles.postLinksDarkMode : styles.postLinks} ${roboto.className}`} style={{textDecoration : 'none'}}>Blog Post on Posting Blogs</Link>
                <Link href='/posts/the_fields_of_computer_science' className={`${darkMode ? styles.postLinksDarkMode : styles.postLinks} ${roboto.className}`} style={{textDecoration : 'none'}}>Thoughts on Computer Science</Link>
            </div>
        </>
    )
}