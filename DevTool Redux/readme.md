# DevTool Redux:
  - for the installtion i've setup the parcel setup.
  - install the redux and setup basic `createStore` with the `reducer` function.
  - once we downllaod the redux extension we've to setup a redux_devtools_extension setup.
  - It'll give the: `__REDUX_DEVTOOLS_EXTENSION__` that created a globally.
  - we've to pass a value on teh createStore variable which will working. `store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__())`
  >:warning: There's teh catch if we install the applicatoin where devtools is not installed it can cause problem for that we can pass this function as a optional chaining. `const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());`
  As it's on teh window object we can access with optional chaing.
  ### It's called the store inhancer.



  ## Redux devtools feature:
    1. Inspector:
      - It'll have all the action type with all the payload it've.
        - Action: with action shows type what have we clicked. shows with type and the payload.
        - State:  Show what the state have'been changed. 
        - Diff: Shows what the changed previous and changed now 
        - Test: for testing not important to learn right now.

    2. Chart:
      -   shows all the member function and their values. 
    
    3. Play:
      - shows all the steps that we've done. 

    - for sync actions we can do auto select by default.

  - Not on the devtools on react it'll show even on teh ui.
  - Rather on console we can see on devtools nowwards. 
     

