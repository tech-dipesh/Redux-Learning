# React connect redux:

  - for that i've setup with the parcel setup,
  - with start a package.json.
  - and also install the react, react-dom.
  - also install teh redux for using the: `createStore, combineReducers`
  - i've to add this: `if (module.hot) {module.hot.accept();}` for making a hot module reloading.
  - As for the redux getting the value, we can't import on the every file, rather we use teh library of: `react-redux` which provide us the `Provider` which we'll wrap all our comps to the Provider.
  - now for using the redux we'lll be using the `useSelector` which provide by react-redux.
  - The `Provider` is also behind the scene using the context api.
  - as we know when we wrap context api to component on all the comps that context api state will be acccessed to all the comps.
  
  - we've to import the function, `  const dispatch=useDispatch();` from the react-redux for dispatch any item.
  - `dispatch(addSingleCart(1))` for making the dispatch any item. 
 


  ## Redux fixing:
    - i've to add the object on the payload of productId, and the quantity.
    - also add the feature of the wishlist let's see how it's goes.
    
    - we also can console on the callback function with this way: `useSelector(console.log)`
    
  - Also learn the react redux our own library with function of: `Provider, useDispatch, useSelector`

>:warning: it's recommend way to setup everything a redux into the store folder which is recommended




## Way to check the store current state:
  - `useSelector(state=>console.log(state))` it shows all the states, or even minified version: `useSelctor(console.log)`
  - on the store folder we can check with: `console.log(store.getState())`
  - With the redux extension State option shows.

## Slices:
  - Slices is one of teh concept on teh redux toolkit, which is real
  - Slice mean, as on the redux we store on the object the key that on object have called the slices.
  - we create all teh slices from teh `combineReducers` function. which decide how many will be slices there.
  - on teh redux toolkit there's the option of: `createSlice` but on redux there's no option of the createSlice.
  - it's the conventional way to move all the slices to the `slices` folder inside a store
  - Also it's conventional of write a file name of: `carSlices` rather than `cartReducer`
  - reducer mean only the function while `cartSlices` mean action type, action creator and reducer.
  


## Redux toolkit:
- our code of the index.js redux code will be simplified by redux toolkit by shorten a code by: ` 50%`
- Also provide us the option of slices
- with redux toolkit help we can write the code in mutable way.



## Immer js:
  - with the immer js we can write the code of immutable style to mutating style.
  - the redux toolkit behiind the scene also use the immer js.
  - it provide teh function of: `produce` for using it we've to call on teh callback function.
  - We don't modify a object property with mutating way on the functional programming rather we return the new object.
  - `modifiedUser=produce(objectList, (copyUser)=>{})` we've to consoel for seeing teh output, first is the object or arry and teh second where we'll make change.
  - the immer js make the proxy array/object.

  ### BENifits of immer js:
  - on functional programmignw with immutable way it become too much complicated code, for the solution there's the library of `immer.js`
    - the immer js make the code more minified version.
    - also performace wise it's far better where we dont' have to loop entire array to get that value and update.
    - the immer 
  - we can write the immer js to the reducer code.
    - better to write the state array name to: `originalState` 



  ## Apply immer js on the project:
    - as on findIndex will return -1 when there's not found any element.
    >:warning: The one problem on one line push return is that push return the length of the array rather return on the two line.
    - with on the push, splice, slice, i've to return on next line for avoid getting the length.
    - i've to return the same on the switch case as it run if we don't break, or either we can break and return on outer area of the proxyArray.
  >:warning:   without the immer js, we can achive it but the page will not rerender, behind the scene it working, that's why on react we should do functional programming, due to the state we'll return as it's.

  - When we return the same state on react, the screen will not change. 

## I've move both file of teh carts and wishlist to immer js with mutable way of writing code on the redux.







## Redux Toolkit:
  - the redux is the official or new way of writing redux, also redux team suggest write a redux with redux toolkit not the direct way.
  - the redux toolkit provide us extra feature top of the redux like createSlices, combineSlices and produce method by default.
  - it'll comperess our code to 50%.
  - 


## How to use redux toolkit:
  - The `createSlice` will help us to create a `action types, action creator and reducer` but won't create a slice.


  ### Use createSlice:
    - on the createSlice we'll be passing a function with objects.
    - the name which will be define of action type name will be a function of the action creator like: `addSingleCart`
    - initialState which we've to pass a empty state or initial Value.
    - `reducers` is the object, which on each object we pass teh switch Case case like: `addCart` last thing of switch case.
    - now we don't need to return anything createSlice handle everything also the produce handle self everything.
    - just write the logic of mutable way.
    - after storing the createSlice on somwhere we can get the `.reducer` function which produce by redux toolkit.
    - the action creator now we can access with: `slice.actions` which it'll make it's own action types, we don't need manual types, 
    - the action name it'll make like: `name: wishlist, action creator: addWishlist` which it'll make: `wishlist/addWishlist` own.
    - When we pass on `slice.actions.actionCreator()` it make the action creator.

    ## after the createSlice:
      - now after wrapping a name, initialState, reducers.
      - we can remove action type, action creator and reducer
      - as a action creator we can get with: `slice.actions`
      - we can export the reducer with: `slice.reducer`
      >:warning: also can access that function with `toString` on the redux toolkit of the `slice.actions`. also kind of bug or problem on the redux.
      -  now neither we need to install the react-redux, and neither immer, as redux-toolkit handle everything.


  ## Replacement of the createStore and combineStore:
    -  from redux and shorter way of exporting everything on the all the slices:
    - for combiging we've done earlier: `createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())`
    - with have to create a object and also have to connected the devtools, which createStore is deprecated.
    - now with the `configureStore` which provide by redux it'll handle a devtools, just pass the reducer: `configureStore({reducer})`
    - the `combineReducers` we've used multiple slices to store on object.
    - for solution we can pass on reducer directly this way: `configureStore({reducer: {allProductList: productReducer})`
    - which now we don't need the redux library to use, redux toolkit handle everything.
    - but redux toolkit behind it's also use a redux.
    

  ## convert the switch case to object:
    - as switch case takes the linear time for that we can do fast lookup with object.
   -  `map = { 200: 'OK', 404: 'Not Found'}, getStatus(code) {return map[code]}`





  ## Middleware on redux:
    - as of now once we dispatch a any action which it goes directly goes to reducer,
    - we can't do the api call on teh reducer, due to reducer are `pure function` mean when we add same input output will be same.
    - The reducer must be the predictible for that before a dispatch reach to a reducer we set the middleware.
    - middlware is the function which runs between the action dispatch between reducer state.
    - famous middleware examples: `logger, errorhandler`

  ## Imp and use Case of Middleware:
    - if middleware want, middleware can stop any action before reaching reducer.
    - on `configureStore` there's teh key of: `middleware` on list of array.
    - Middleware is the special type of function which have 3 param.
    - middleware is the curryed version of the function. 

    ## How to use middleware:
    - with currying function we pass the param of, `store, next, action`
    - on middleware keys on the configureStore we pass teh callback function like this: `middleware:()=> [logger],
    - by default if we perform any action the middleware will not dispatch any action mean stop by default any action,
    - as action will have the type and the payload.
    - with: `next(action)` mean move forward the action don't stop with passing the action.
    - we can convert to arrow function of middleware: `logger=(store)=>(next)=>(action)=>next(action)`
    

    ## where to store a middleware:
    - it's recommend way to store a all middlewars on separate folder of: `middleware`
    - with name of the middleware of filename.
    

    



## Data Fetching on Redux:
  - on redux we mainly fetch the data with 4 ways.
  - Custom api middleware
  - Thunk
  - Redux Tookit Query (RTQ)
  - Saga: Not widely used not need to learn



  ## Making Api Call Redux:
    - on the normal react we normally fetch the data on the useEffect.
    - initially with the help of the useEffect once our data is get we can dispatch our data to the slices
    - of the action creator we've call the function on the useEffect with the fetch data.
    - for the loading State, we've to modify the initialState of the product list.
    - as productList become a object we've to make useSelector with access the object. `useSelector((state)=>state.allProductList.initialList)`
    - with the `useDispatch` we can perform any action, with while with `useSelector` we can show a data


      - for the performance issue we can optimize with only add the list what required.




## Selector on Redux:
  - with the help of the selector we make the react component more clean.
  - the useSelector callBack function we pass is the selector.
  - it's conventional that useSelector not define a inline, on the slice folder define there.
  - with export this way: `export v=state=>state.allCartList`
  - and import with: `useSelector(v)` where we've to use the data.


  ### Memoize:
    - when we're returnign the new array with the map, whiich renrender a new data, 
    - with the help of redux toolkit which provide a one functoin of: `createSelector` we can memoize our code.
    - when our data is not changing, it'll not rereneder until/unless not changing a data.  

