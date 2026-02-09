# Custom API Middleware:
  - With the help of the  custom api middleware we can make our code more optimized.
  - which our react ui components make more clean and it's easier to do the data Fetching.
  
  ## how to make custom api middleware:
    - we can create a new middleware of named: `api.js`.
    - where we can dispatch the new action type of: `api/requestApi` and with if condition we can catch that request.
    - we've to call the `useDispatch` inside the react comps which i've faced the error.
    - which on the action become the type while payload we can pass all 3 dispatch such as: `onSuccess, onLoading, onError`
    - i've send the action payload all 3 types, where on middleware ii set the data.


  ## OnSuccess Types:
    - it's convenient to make the payload a syrailizable.
    - as json only can understand a syralizable if not our devtools can't understand.
    - the functional is non syrliazable which is the problem.
    - this way: `  onSuccess: loadAllProducts.type,` and ` dispatch({type: onSuccess,payload: data})`

    - now we can call multiple dispatch api call with the same name.



    - for making a more shorter a fetchData we can make teh function with payload pass and base url is same.





    ## Thunk Middleware:
      - When we do the data fetching from thunk our ui layer data fetchign compresss to just 2 to 3 line.
    -  on the custmo middleware, when we dispatch any action it's the object with teh type and payload.
    - when we use the thunk instad of object we can even pass the `callback function`
  - we can create our own custom middlewrae for handling a thunk middleware.
  - on the thunk we can check is that a function and based on that we can pass the `action`
  - now on the dispatch we can fetch the data. with same logic.
  - for doing the dispatch inside a dispatch we've to pass on the params.
  - But it's recommend way to defien teh dispatch function on the slice file.
  - with passing a dispatch and action on the thunk file.
  - and call teh custom middleware.



  ## CreateAsyncThunk:
    - 


  ## Rtk Query Learn Later:
  