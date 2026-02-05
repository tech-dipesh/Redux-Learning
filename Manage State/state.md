# For manage Teh state on the reducer:
  - there's the Reducer which we do the operatoin,
  - Always dispatch mean update and dispatch have main two types: {type, payload}, type comes with what to do and payload how many.
  - Rememeber we always operate the data on teh non mutating way.
  

  - Only the specific task we're trying to add on teh single state, with divide a differeent parts. with differeetn reducer name: `addReducer` `removeReducer`
  


  - for manage teh multiple Reducer we separate teh files based on their key features.
  - We'll combien all the object with: ` reducer=combineReducer({p: products, })`
  - now we can pass the reducer to teh main createStore.
  


  ## Action creator on the js:
    - as our code become repetable on the dispatch we can write on teh function with just chnage the param.
    - with the function we can pass the repetable function to that file: `store.dispatch(addProductQuantity('Mango'))`
    - with action creator we make the file structure and readable with also the reusable. 


  - Once we do the action creator now we don't need to export the actoin type only the action creator and reducer will be enough for export.

  - i've make the action creator to all the files that exist.
  
  
# >:warning: We've implement The ducks pattern, which mean in single file add the `action types`, `action creator` and add the `reducer`. which is highly used pattern on the redux. 


- also other people use the other pattern of separate of action types, action creator and reducer for separate file rather the above duck pattern is better pattern on redux.


  const arr = [
  ...objectsArray.filter(obj => 
    numbersArray.includes(obj.id)
  )
];

const matchedUsers = users.filter(user => ids.includes(user.id));

