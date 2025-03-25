// console.log("==========");
// function list(numbers) {
//     return numbers;
//   }

//   const result = list([5, 21, 12, 21, 8]).indexOf(21);

//   console.log(result);
// function list(s, t) {
//   return s.split("").sort().join("") !== t.split("").sort().join("");
// }

// console.log(list("hello", "hello"));

// console.log(list("hello", "world"));
// function list (nums, n) {
//     let result = [];

//     for (let i = 0; i < n; i++) {
//         result.push(nums[i])
//         result.push(nums[i + n])
//     }


//     return result
// }
// console.log(list([2, 5, 1, 3, 4, 7], 3));
function getFilteredList() {
    const list = [1, 4, 5, 4, 7, 4];
    return list.filter(ele => ele === 4);
  }
  
  console.log(getFilteredList()); // Output: [4, 4, 4]
  