import React from 'react'
import './Feed.css'

import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'



function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
            key={id}
            profilePic={profilePic}
            timestamp={timestamp}
            username={username}
            image={image}
            />
        <Post />
        <Post />
        </div>
    )
}
 export default Feed;