import Head from 'next/head'
import PostsList from '@components/PostsList'
import { DarkModeContextReturn } from '@components/Context'

export default function PostsPage() {
    let {darkMode, changeDarkMode} = DarkModeContextReturn();
    return (
        <div>
            <style jsx global>{`
                body {
                ${darkMode ? 'background: #434343' : 'background: #f6f6f6;'}
                }
            `}</style>
            <PostsList />
        </div>
    )
}
