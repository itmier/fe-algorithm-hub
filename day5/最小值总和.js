// 给定一个二维数组, 在每一组中获取最小值并求和
const list = [
  [1, 3, 7, 2, 9, 100, 2],
  [98, 6, 89, 3, 1, 10],
  [20, 100, 8]
]

// 方案一
function getSumOfMin(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0)
}
/**
 * 简析
 * 通过Math.min获取最小值, 然后通过reduce将每组的最小值累加
 */
const result = getSumOfMin(list)
console.log(result)

// 方案2
function getSumOfMin2(arr) {
  let result = 0
  arr.map((item) => {
    let min = Infinity
    item.map((childItem) => {
      if (min > childItem) {
        min = childItem
      }
    })
    result += min
  })
  return result
}
/**
 * 简析
 * 对数组进行遍历, 通过给定一个无穷大的最小值, 将这个最小值与每组的每个值相比, 拿到每组的最小值, 然后...
 */
const result2 = getSumOfMin(list)
console.log(result2)
