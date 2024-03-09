const arrayFunctions = () => {
  let arr1 = ["abc", "def"];
  let arr2 = ["ghi", "jkl"];
  let combined = arr1.concat(arr2);
  return combined.reverse();
};

console.log(arrayFunctions());
