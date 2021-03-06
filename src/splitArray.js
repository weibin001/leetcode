/*
给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。

注意:
数组长度 n 满足以下条件:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
示例:

输入:
nums = [7,2,5,10,8]

m = 2

7         2,5,10,8   
7,2       5,10,8
7,2,5     10,8
7,2,5,10  8

m=3

7       2    5,10,8
7     2,5    10,8
7   2,5,10    8
7,2     5    10,8
7,2,5   10    8

m=4
7,2,5,10      8
7             2,5,10,8




m=1 总数： 1  
m=2 总数： n-1  
m=3 总数： n

输出:
18

解释:
一共有四种方法将nums分割为2个子数组。
其中最好的方式是将其分为[7,2,5] 和 [10,8]，
因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
*/

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let max = 0, // 数组最大值
    sum = 0 // 数组和
  // result 取值区间范围[max,sum]
  for (let i = 0; i < array.length; i++) {
    if (max < nums[i]) max = nums[i]
    sum += nums[i]
  }

  while(max<sum)
}

splitArray([7, 2, 5, 10, 8], 2)
splitArray([1, 2147483646], 1)
