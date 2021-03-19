/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable arrow-parens */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import NewPost from './newPost'
import Post from './post'

const PostList = ({ posts }) => {
  const [addingPostFlag, setAddingPostFlag] = useState(false)
  const addPost = () => {
    setAddingPostFlag(true)
  }
  let element
  if (addingPostFlag) {
    element = <NewPost setFlag={setAddingPostFlag} />
  } else {
    element = <button onClick={addPost}>New Post</button>
  }
  return (
    <div>
      <h1>Post List</h1>
      { element }
      { posts.map(post => <Post
        title={post.title}
        description={post.description}
        image={post.image}
        id={post.id}
        key={post.id}
      />) }
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.ListReducer,
})

export default connect(mapStateToProps)(PostList)
