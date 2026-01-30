# The deep shallow copy and shallow copy are the most inportant topic before starting teh redux to
pic on the react.

# Shallow Copy:
  - When we trying to copy the array and the object, 
  - the duplicate values and the original value will point to the same memory which we can verify with: `memory devtools insepector` 
  >:warning: When we assign a one variable to the another variablle, The memory address willl be the same.

  >:fire: As string is primitive data types which create the new memory but on array and object it doesn't happen due to non primitive data type.
  - When we done the `=` 90% on the case we create the new memory.

  ## Solution of the Same Memory Point:
  1. First Approach:
    - With The Object Assign before es6:
    - create new empty array/object: `const arr2={} or arr2=[]`
    - With `Object.assign(arr2, arr1)` First will be the new value where we want to push and second will be where we want to put.
  2. Second Approach:
  - Es6 Method:
  - `const arr2={...arr2}`: with the spread operator we can directly assign the new memory.

  Above method is shallow copy but there's the flaws when there's the 2 level value nesting it won't work due to same memory point for that we need the `Deep Copy`



# Copy Method:
  - As For the 2 level nesting data copy we use: `deep copy`
  - with `const obj1=JSON.parse(JSON.stringify(ojb))`
  - Why it used hte json parse:
  1. As stringification breakk all reference and become separate text.
  2. Now parsing create the new Object with new memory




- difference between the rest and the spread operator.
