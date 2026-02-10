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
