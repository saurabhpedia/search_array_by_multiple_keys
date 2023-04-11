search_array_by_multiple_keys(array, searchObj) {
  return array.find(item => {
    return Object.keys(searchObj).every(key => {
      return item[key] === searchObj[key];
    });
  });
}


module.exports = { search_array_by_multiple_keys };