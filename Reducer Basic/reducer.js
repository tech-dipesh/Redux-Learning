let value={
  count: 0
}

// const incrementcount=(value)=>{
//   value.count= value.count+1;
// }


function incrementcount(value){
  value={...value, count:value.count+1}
}

incrementcount(value);
// console.log(value)
incrementcount(value)
// console.log(value)
incrementcount(value)
// console.log(value)




let value1={
  count: 0
}

// const incrementcount=(value)=>{
//   value.count= value.count+1;
// }


function incrementcount1(){
  value1={...value1, count:value1.count+1}
}
incrementcount1()
// console.log(value1)
incrementcount1()
// console.log(value1)
incrementcount1()
// console.log(value1)







// Reducer Way to write the reducer:
let reduxState={
name: 'Dipesh Sharma',
hometown: 'Baglunge Thito',
Passion: 'Software Development',
Age: 20,
isNepali: true,
isModern: false
}

function stateUpdater(reduxState, action){
  if(action.type=='Age/increase'){
    return {...reduxState, Age: reduxState.Age+2}
  }
  else if(action.type=='Age/decrease'){
    return {...reduxState, Age: reduxState.Age-2}
  }
  return reduxState;
}

reduxState=stateUpdater(reduxState, {type: 'Age/increase'})
// console.log(reduxState);
reduxState=stateUpdater(reduxState, {type: 'Age/decrease'})
// console.log(reduxState);
reduxState=stateUpdater(reduxState, {type: 'Age/decrease'})
// console.log(reduxState);
// console.log(reduxState);



// Payload:
let newRedux={
name: 'Dipesh Sharma',
hometown: 'Baglunge Thito',
Passion: 'Software Development',
Age: 20,
isNepali: true,
isModern: false
}
function reducer(red, action){
  if(action.type=='Age/increase'){
    return {...red, Age: red.Age+action.payload}
  }
  else if(action.type=='Age/decrease'){
    return {...red, Age: red.Age-action.payload}
  }
  return red;
}
reduxState=reducer(newRedux, {type: 'Age/increase', payload: 10})
console.log(reduxState);
reduxState=reducer(newRedux, {type: 'Age/decrease', payload: 8})
console.log(reduxState);