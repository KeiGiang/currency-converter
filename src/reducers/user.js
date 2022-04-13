const initialState = {
  name: 'John',
  loggedIn: false
}

export const userReducer = (state = initialState, action) => {
  return state
}

export const selectors = {
  getName: state => state.user.name
}
