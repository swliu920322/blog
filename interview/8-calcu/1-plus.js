//

var twoSum = function (nums, target) {
  const map = {};
  const len = nums.length;
  var i = 0;
  for (; i < len; ++i) {
    // const targetNum = target - nums[i];
    // if (targetNum in map) { // map[targetNum] !== undefined
    //   return [map[targetNum], i];
    // }
    // map[nums[i]] = i;
    const value = nums[i];
    if (value in map) {
      return [map[value], i];
    }
    map[target - value] = i;
  }
};


var twoSum = function (nums, target) {
  let remove = 0;
  const map = {};
  while (nums.length > 0) {
    const value = nums.shift();
    if (value in map) {
      return [remove, map[value]];
    }
    map[target - value] = remove;
    ++remove;
  }
};

var a = twoSum([2, 7, 11, 15], 9);
console.log(a);
