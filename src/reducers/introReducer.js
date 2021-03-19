/* eslint-disable semi */

const IntroReducer = (state = [], action) => {
  const { title, description, image } = action
  if (action.type === 'edit') {
    return [title, description, image]
  }
  return state
}
export default IntroReducer
