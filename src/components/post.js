/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { useState } from 'react'
import { connect } from 'react-redux'

const Post = (props) => {
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)
  const [image, setImage] = useState(props.image)
  const [editFlag, setEditFlag] = useState(false)
  const { id } = props
  const originalPost = { title, description, image }
  const { dispatchDeletePost } = props

  const deletePost = () => {
    dispatchDeletePost(id)
  }

  const cancelEdit = () => {
    setTitle(originalPost.title)
    setDescription(originalPost.description)
    setImage(originalPost.image)
    setEditFlag(false)
  }

  return (
    <div>
      {editFlag
        ? <form>
            <label>Post #{id} Title:
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder={title} />
            </label>
            <label>Description:
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={description}
                />
            </label>
            <label>Image: <input type="text" onChange={(e) => setImage(e.target.value)} /></label>
            <br />
            <button type="button" onClick={() => setEditFlag(false)}>Save</button>
            <button type="button" onClick={cancelEdit}>Cancel</button>
            <button type="button" onClick={deletePost}>Delete</button>
          </form>
        : <div>
            <h1>Post #{id}: {title}</h1>
            <p>{description}</p>
            <img src={image} style={{ width: 300 }} />
            <button type="button" onClick={() => setEditFlag(true)}>Edit</button>
          <hr />
          </div>}
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  dispatchDeletePost: (id) => dispatch({ type: 'delete', id }),
})

export default connect(null, mapDispatchToProps)(Post)
