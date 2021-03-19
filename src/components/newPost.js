/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
import React, { useState } from 'react'
import { connect } from 'react-redux'

let postId = 1

const NewPost = (props) => {
  const { dispatchAddPost } = props
  const setAddingPostFlag = props.setFlag
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()

  const savePost = () => {
    dispatchAddPost(title, description, image, postId)
    postId++
    setAddingPostFlag(false)
  }

  return (
    <div>
      <form>
        <label>Title: <input type='text' onChange={event => setTitle(event.target.value)} /></label>
        <label>Description:
          <textarea onChange={event => setDescription(event.target.value)} />
        </label>
        <label>Image: <input type='text' onChange={event => setImage(event.target.value)} /></label>
        <br />
        <button type='button' onClick={savePost}>Save</button>
        <button type='button' onClick={() => setAddingPostFlag(false)}>Cancel</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, description, image, id) => dispatch({
    type: 'add', title, description, image, id,
  }),
})

export default connect(null, mapDispatchToProps)(NewPost)
