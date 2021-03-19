/* eslint-disable arrow-parens */
/* eslint-disable semi */

const ListReducer = (state = [], action) => {
  const {
    title, description, image, id,
  } = action
  if (action.type === 'delete') {
    const remArr = state.filter(e => e.id !== id)
    return remArr
  } if (action.type === 'add') {
    return [
      ...state,
      {
        title, description, image, id,
      },
    ]
  }
  return state
}

export default ListReducer
