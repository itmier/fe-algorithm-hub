/**
 * 写一个函数,参数1为正确答案的数组, 参数2为学生答案的数组
 * 两个数组长度相同,要求该函数返回学生的得分(正确答案+4, 错误答案-1, 空白答案+0(y以空字符串表示))
 * 如果分数<0 则返回0
 */

function checkTest(param1, param2) {
  const reducer = (a, b, index) => {
    if (b === '') {
      return a
    }
    if (b === param1[index]) {
      return (a += 4)
    }
    return --a
  }
  const score = param2.reduce(reducer, 0)
  return score < 0 ? 0 : score
}
/**
 * 简析:
 * 通过reduce来完成累加, 在reduce的回调函数中来对分数加减进行判断,
 * 通过参数b(当前value)来进行相关判断, 需要注意的是错误答案, 返回的结果是--a,
 * 因为reduce是把回调函数的结果作为第一个参数传递到第二次的累加中,
 * 所以如果是a--的话, 其实返回的还是结果a, 而不是-1后的结果
 */

function checkTest2(param1, param2) {
  let scope = 0
  for (let i = 0; i < param1.length; i++) {
    if (param1[i] === param2[i]) {
      scope += 4
    } else if (param2[i] === '') {
      scope += 0
    } else {
      scope--
    }
  }
  return scope < 0 ? 0 : scope
}
/**
 * 简析
 * 这个就是一个简单的遍历 后面scope--就可以正常用了, 因为函数时基于顶层的scope做的处理, 执行完成后会减掉
 */

// 测试
console.log(checkTest([1, 5, 8, 3, 2], [1, 3, 8, 3, '']))
console.log(checkTest2([1, 5, 8, 3, 2], [1, 3, 8, 3, '']))
