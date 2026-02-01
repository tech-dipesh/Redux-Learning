# State managment is used to making the robust and solid state managment on our react project.
   - We can even use the redux on the vanilla js, react and even on any frontend libraries, frameworkd.


  ## Redux Fundamental topics:
  - reduceer, action, payload, action type, dispatch, getState 

  ## REdux toolkit is the modern way of writing the redux.
  ### Top Learning on the redux:
    - We connect the redux store on the react.
    - There's the topic of even middleware on the redux, which used to fetch the task on aschrounous manner.
    - Ther's also the redux toolkit query, which we efficiently can fetch tehe data.





## Why do we need the Redux:
  - when we try to share theh state between teh siblings we can't dirently send teh data, ew've to state up to the parent comps.
  - As our application grows, there are lot of state wehich we're passing.
  - After lot's of props passing to one comps to another comps it become the props drilling which slow our website.
  >:fire: For solution of the props drillling we use the context api, for centre state managment.  Behind the scene the redux Also use the context api.
  >:white_check_mark: AS long on small to medium size projects context api work perfectly. as our projects get's bigger, with lot of central states redux work perfectly.

  - React efficienly update the state, with solid way of or only single way to upload. 
  - It's one of the best even that our all the components state we can put on the redux.



## Redux Store:
- application state
- state update logic
- method to notify the state change

  ### Application State:
  - It's a big object where our all the details will be there.
  - example: `state: {aSTate: {}, bState: {}}`

  ### State Update Logic:
    - It've teh `reducer` which is a function, 
    - the reducer is a function but it's not visible on the page.
    - Which `reducer` function will update our state not the direct update.

  ### Notify State Change:
     - Have the `subscribe()` method, 
    



## Reducer:
  - Reducer is the pattern, which mean for solving the any problem it's the well defined solution.

## Redux Idea:
  - The core idea of the redux is we shouldn't mutate the original data.
  - On the State Mutate Way it'll become the non address but when we use the Shallow copy address it'll have it's own address. 
  - When we try to change the ny state value by immutable state for ex: `state={count: count+1}`
  - Which will replace the old state complelety and give the new address.
  - as soon as we use assignment operator it'll give the new unique address to us.

  

>:warning: It's must known to deep copy adn deep shallow copy of the object value of teh js before learning the redux.
>:sparkles: On the functional programming it's the recommend way to chagne teh state value with teh Immutable way. which we do on the state updation.

- React Behind the Scene use the shallow copy, and check is new value false or true compare to original value.





## Reducer Pattern:
  - Reducer gives the more strict pattern to update any state value..
  

