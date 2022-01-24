// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { createPost } from '../../actions/posts'


// const Form = ({ currentId, setCurrentId }) => {
//      const [postData, setPostData] = useState({ creator: '', title: '' })
//      const dispatch = useDispatch()

//      const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//      useEffect(() => {
//           if (post) setPostData(post)
//      }, [post])
//      const posts = useSelector((state) => state.posts)

//      const handleSubmit = async (e) => {
//           e.preventDefault()

//           dispatch(createPost(postData))
//      }

//      return (
//           <>
//                {posts.map((post) => (
//                     <h1 key={post._id}>{post.title}</h1>
//                ))}
//                <form action="off" onSubmit={handleSubmit}>
//                     <input type="text" name="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
//                     <input type="text" name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//                     <button type="submit">Submit</button>
//                </form>
//                {/* <h1></h1> */}
//           </>
//      )
// }

// export default Form