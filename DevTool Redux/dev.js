import { createStore } from "redux";
import myRedux from "./my-redux";

let startingValue = {
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

function reducer(state=startingValue, action) {
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(myRedux())

console.log(store);
store.subscribe(()=>{
  console.log("State have been changeds, ", store.getState());
})

store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE});
// store.dispatch({type: INCREASE_BY, payload: 3 });
// store.dispatch({type: DECREASE_BY, payload: 6 });
// console.log("Create store value is", createStore);


setTimeout(() => {
    store.dispatch({type: INCREASE_BY, payload: 30})
}, 1000);



const btn=document.querySelector("button");
btn.addEventListener("click", ()=>{
    btn.innerText=store.dispatch({type: INCREASE})
})