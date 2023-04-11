# Search array by multiple keys

Add object containing key-value pairs that you want to search for.

This implementation uses the Object.keys() method to get an array of all the keys in the searchObj object. Then, it uses the every() method to check if every key in the searchObj object matches the corresponding key-value pair in the item object in the array. If all key-value pairs match, the find() method returns the matching item from the array.

To use this modified function, you can call it like this:

```

const array = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 35 },
  { id: 3, name: 'Charlie', age: 25 },
];

const searchObj = { name: 'Bob', age: 35 };
const result = search_array_by_keys(array, searchObj);
console.log(result); // { id: 2, name: 'Bob', age: 35 }

```
In this example, the searchObj object contains the name and age keys with corresponding values that we want to search for in the array of objects. The search_array_by_keys() function returns the object from the array that matches both key-value pairs in the searchObj object.