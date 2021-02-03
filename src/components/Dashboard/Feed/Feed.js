import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from '../../../firebase'

import StoryReel from '../Feed/StoryReel/StoryReel'
import MessageSender from '../Feed/MessageSender/MessageSender'
import Post from '../Feed/Post/Post'



function Feed() {
    const[posts, setPosts] = useState([])

    // Listens to any changes and rerenders when there are changes
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
            />
            ))}
        </div>
    )
}
 export default Feed;