## State Update Logic:
  - We've to create a function for the stateUpdater.
  - We'll not update the direct update the redux say: We'll pass the data, and don't change the state rather return the new Updated state.
  `return {...state, count:state.count+1}`
  - With `reduxValue=stateUpdate(state)` we assign that updated value to that original object.

## Redux Action:
  -  Not Only the state increament we pass the action to whether we'll increament or decreament the value.
  - 
  - Action is the object which mandatory type property: `action={type: 'increaseCount'}`
  
  - With type property the conventional way to write is: `{type: count/increase}`

  >:warning: The Type property is mandatory on the function while payload is the optional.

  - by default we've to return the reduxState if any type is not matched.

  ### Payload:
    - on the payload property we'll be passing how much we want to increase or decrease it.
    - it's become: consst newUPdate=`reducer(newUpdate, {type: 'post/increamentby', payload: 10})`

### Why name is reducer:
  - As of right now we've only make the state Updater but the name will be the reducer.
  - the reducer will not update a state, which redux itself update the state not the reducer function.
  - the reducer task is to take a `state, action` and combine them and return single thing.
  - it's the kind of: `reduce` of the js method.
   