import { createStore } from "redux";

let newRedux = {
  name: "Dipesh Sharma",
  hometown: "Baglunge Thito",
  Passion: "Software Development",
  Age: 20,
  isNepali: true,
  isModern: false,
};

const INCREASE='Age/increase';
const DECREASE='Age/decrease';
const INCREASE_BY='Age/inreaseBy'
const DECREASE_BY ='Age/decreaseBy'

// function reducer(state=newRedux, action) {
//   if (action.type == INCREASE) {
//     return { ...state, Age: state.Age + 1 };
//   } else if (action.type == DECREASE) {
//     return { ...state, Age: state.Age - 1 };
//   }
//   else if(action.type==INCREASE_BY){
//     return {...state, Age: state.Age+action.payload}
//   }
//   else if(action.type==DECREASE_BY){
//     return {...state, Age: state.Age-action.payload}
//   }
//   return state;
// }
function reducer(state=newRedux, action) {
  switch (action.type){
    case INCREASE: 
    return { ...state, Age: state.Age + 1 };
    case DECREASE:
      return { ...state, Age: state.Age - 1 };
    case INCREASE_BY:
        return {...state, Age: state.Age+action.payload}
        breakK;
    case DECREASE_BY:
          return {...state, Age: state.Age-action.payload}
    default:
      return state;
  } 
}

const store = createStore(reducer);

store.subscribe(()=>{
  console.log("State have been changeds, ", store.getState());
})

store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE_BY, payload: 3 });
store.dispatch({type: DECREASE_BY, payload: 6 });
// console.log("Create store value is", createStore);