/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { connect } from 'react-redux'

const Intro = (props) => {
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)
  const [image, setImage] = useState(props.image)
  const [editFlag, setEditFlag] = useState(false)
  const { dispatchEditIntro } = props

  const editIntro = () => {
    dispatchEditIntro(title, description, image)
  }

  const saveIntro = () => {
    setEditFlag(false)
    editIntro()
  }

  const cancelChanges = () => {
    setEditFlag(false)
    setTitle(props.title)
    setDescription(props.description)
    setImage(props.description)
  }

  return (
    <div>
      {editFlag ?
        <form>
          <label>Title:
            <input type="text" onChange={event => setTitle(event.target.value)} placeholder={title} />
          </label>
          <label>Description:
            <textarea
              onChange={event => setDescription(event.target.value)}
              placeholder={description}
            />
          </label>
          <label>Image: <input type="text" onChange={event => setImage(event.target.value)} /></label>
          <br />
          <button type="button" onClick={saveIntro}>Save</button>
          <button type="button" onClick={cancelChanges}>Cancel</button>
        </form> :
        <div>
          <h1>Introduction</h1>
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={image} style={{ width: 300 }} />
          <button type="button" onClick={() => setEditFlag(true)}>Edit</button>
        </div>}
    </div>
  )
}

const mapStateToProps = state => ({
  title: state.IntroReducer.title,
  description: state.IntroReducer.description,
  image: state.IntroReducer.image,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (title, description, image) => dispatch({
    type: 'edit', title, description, image,
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
