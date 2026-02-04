export default function myRedux(reducer){
  const state={
    getState(){
        return state;
    },
    dispatch(action){
      state=reducer(state, action)
    },
    subscribe(){

    }
  }
  return state;
}