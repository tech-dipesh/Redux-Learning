export const ADD_USER='user/add'
export const REMOVE_USERS='user/remove'

export function addUser(payload){
  return {
    type: ADD_USER, payload
  }
}
export function removeUser(payload){
  return {
    type: REMOVE_USERS, payload
  }
}

export default function userReducer(state=[], action){
  switch (action.type){
       case ADD_USER:
        return [
          ...state,
          action.payload
        ]
        case REMOVE_USERS:
          return [
            ...state.filter(f=>!action.payload.includes(f))
          ]
      default:
    return state
  }
}