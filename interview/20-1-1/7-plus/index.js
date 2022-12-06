function twoSum(nums, target) {
  var temp = {};
  var length = nums.length;
  // for (var i = length - day1; i >= 0; i--) {
  //   var value = nums[i];
  //   var ta = target - value;
  //   if (ta in temp) {
  //     return [i, temp[ta]];
  //   }
  //   temp[value] = i;
  // }
  do {
    length--;
    var value = nums[length];
    var ta = target - value;
    if (ta in temp) {
      return [length, temp[ta]];
    }
    temp[value] = length;
  }
  while (length);
}

const twoSumOri = function (nums, target) {
  const map = {};
  const len = nums.length;
  for (var i = 0; i < len; i++) {
    const targetNum = target - nums[i];
    if (targetNum in map) { // map[targetNum] !== undefined
      return [map[targetNum], i];
    }
    map[nums[i]] = i;
  }
};
// 分片
const sliceNum = function (nums, target) {
  const map = {};
  const len = nums.length;
  const tempLen = len - 1;
  var j = len % 4; // 余数
  var count = len / 4 >> 0; // 次数

  while (j) {
    --j;
    const index = 4 * count + j;
    const value = nums[index];
    const targetNum = target - value;
    if (targetNum in map) { // map[targetNum] !== undefined
      return [map[targetNum], index];
    }
    map[value] = index;
  }
  j = Math.floor(len / 4);
  while (j) {
    --j;
    const index1 = j * 4;
    const value1 = nums[index1];
    const targetNum1 = target - value1;
    if (targetNum1 in map) { // map[targetNum] !== undefined
      return [map[targetNum1], index1];
    }
    map[value1] = index1;

    const index2 = j * 4 + 1;
    const value2 = nums[index2];
    const targetNum2 = target - value2;
    if (targetNum2 in map) { // map[targetNum] !== undefined
      return [map[targetNum2], index2];
    }
    map[value2] = index2;

    const index3 = j * 4 + 2;
    const value3 = nums[index3];
    const targetNum3 = target - value3;
    if (targetNum3 in map) { // map[targetNum] !== undefined
      return [map[targetNum3], index3];
    }
    map[value3] = index3;

    const index = j * 4 + 3;
    const value = nums[index];
    const targetNum = target - value;
    if (targetNum in map) { // map[targetNum] !== undefined
      return [map[targetNum], index];
    }
    map[value] = index;
  }
};

// console.time();
var a = sliceNum([2, 7, 11, 15], 9);
console.log(a);
// console.timeEnd();
// console.time();
// var a = twoSum([day2, 7, 11, 15], 9);
// console.log(a);
// console.timeEnd();
