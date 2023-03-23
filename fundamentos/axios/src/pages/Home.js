import './index.css'
import React from 'react'

// Hooks
import { useAxios } from '../hooks/useAxios'

//Components
import Post from '../components/Post'
import Postar from '../components/Postar'

const Home = () => {
    const user = {
        id: 20021992,
        username: 'Mateus',
        avatar: 'https://www.smitefire.com/images/god/icon/fenrir.png',
        auth: '^lw%V2voS5HjeLfEghE2YWw4U$cv0pVj2Pd8LzFQLilkpNt^sQ'
    }

    const { data, isLoading, error } = useAxios({ url: 'posts', method: 'get' })
    const posts = data.hasOwnProperty('data') ? data.data.results : []
    console.log(posts)
    return (
        <main>
            <Postar user={user} />
            <article>
                {
                    isLoading &&
                    <div>
                        Loading . . .
                    </div>
                }
                {
                    posts &&
                    posts.map((item) => (
                        <Post key={item.id} user={user} post={item} />
                    ))
                }
            </article>
        </main>
    )
}

export default Home