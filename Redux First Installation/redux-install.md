# First Parcel Setup:
  - i've first setup the parcel configration:
  
### CreateStore:
  - i've import the: `createStore` function of the redux.
  >:warning: The createStore is only for the learning purpose not for deployment which is now deprecated.
  - The createStore have the three property: `(reducer, preloadedState, enhancer) {`
  - The `reducer` params, is mandatory why preLoadedState and enhancer is optional.
  - As once we call the `createStore(reducer)` it's return something.
  - Which we: `const store=createStore(reducer)` store on something.

  #### Four Params:
    - `@@observable: ƒ observable()`
    - `dispatch: ƒ dispatch(action)`
    - `getState: ƒ getState()`
    - `replaceReducer: ƒ replaceReducer(nextReducer)`
    - `subscribe: ƒ subscribe(listener)`

  >:white_check_mark: The most important is: `disPatch, getState, subscribe`. getState is the Most important which is itself the function.

  


  ## getState
    - on the getState we've to give the inital stage on teh function, which is the object, b
    - once it called a second time onwards it take the updated state not the old.


  ## dispatch:
  - When we need to call the reducer we've to call with dispatch.
  - dispatch behind the scene it'll call our `reducer` function.
  >:fire: We pass the   action on the dispatch what action we've to do.
    - `store.dispatch({type: 'Age/increase', payload: 29});` We also pass the payload.


  ## Subscribe:
    - Subscribe method will told us that our state have been changed or not.
    - It called every time when our value is changed.


  ## OUr Working Flow:
    - When creating the store, we'll create on teh `createStore` with `reducer` function which have, state, and action .
    - `store.getState` Get Current state value
    - Now with the `store.dispatch()` for  perform any operatoni with: `action:{type, payload}`
    - With `store.susbcribe` as it's callback function it'll call every time when our state is changed. 
  



# It's a conventional way to create the variable where we store all the action type, Also the variable must be teh upper Case with _ for conventional. ex: `INCREASE`
   - the namign now  we can use everytwhere.


  ## More Notes:
    - on the single redux, there can be teh multiple of state, for writing our own type it's become more difficult for teh soltution there's the redux toolkit for the soluiton
    - Also it's preffered to write on the switch case rather than the if else condtion.
    - we've converted teh if else to the switch case. 