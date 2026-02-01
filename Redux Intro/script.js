const initialState={
    count:0
}

const copyState={...initialState};



// Mutating Way of changint the original data. 
initialState.count=initialState.count+1;
// console.log(initialState, initialState);




// Non Mutate/ Immutable Way to change the data:
  let initialstate={
    initialCount: 0,
    help: "goog"
  }
  const copySecondState=initialState
  
  initialstate={initialstate: initialstate.initialCount+1};

  console.log(initialstate, copySecondState);


