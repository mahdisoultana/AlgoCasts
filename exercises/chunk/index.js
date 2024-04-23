// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
function chunk(array, size) {
  //chunk array result;
  const chunked = [];
  for (let cc of array) {
    const lastChunkedItem = chunked[chunked.length - 1];
    if (!lastChunkedItem || lastChunkedItem.length == size) {
      chunked.push([cc]);
    } else {
      lastChunkedItem.push(cc);
    }
  }
  return chunked;
}

// function chunk(array, size) {

//   const result = array.reduce((acc, cc, index, array) => {
//     let lastElementChunked = acc[acc.length - 1];
//     if (!lastElementChunked || lastElementChunked.length == size) {
//       acc.push([cc]);
//     } else {
//       lastElementChunked.push(cc);
//     }
//     console.log(acc);
//     return acc;
//   }, []);

//   return result;
// }
// function chunk(array, size) {
//   let index = 0;
//   const chunked = [];
//   while (index < array.length) {
//   const nextSlice = index + size;
//       const chunk = array.slice(index,nextSlice );
//       chunked.push(chunk);
//       index= index+size
//   }
//   return chunked;
// }
module.exports = chunk;
