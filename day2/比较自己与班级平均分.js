/**
 * 你的课堂上有一个测试，你通过了。恭喜你！但是你是一个有野心的人。你想知道自己是否比班上的学生的平均成绩更好。
 * 你会收到一个包含同龄人考试成绩的数组。现在计算平均值并比较你的分数！
 * 如果你更好，请返回True，否则False！
 * 注意：你的分数不包括在班级分数组中。为了计算平均点，你也可以将分数添加到给定的数组中！
 */
// 第1种
function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  return yourPoints > average
  /**
   * 简析
   * 通过数组的reduce方法计算出班级总分, 然后除以学生人数获取平均分 然后比较一下
   * 我平常用到reduce比较少 这里简单复习一下
   * reduce() 有两个参数, 第一个是个函数 第二个参数是初始值, 会被传入到函数的第一个参数
   * 函数的第一个参数值为函数结果, 函数的第二个参数为数组的value, 从索引0开始传入, 每一次的函数结果会作为参数传递到第一个参数中, 由此实现累加
   */
}
// 第2种
function betterThanAverage2(classPoints, yourPoints) {
  let totalCount = 0
  for (let i = 0; i < classPoints.length; i++) {
    totalCount += classPoints[i]
  }
  const average = totalCount === 0 ? 0 : totalCount / classPoints.length
  return yourPoints > average
}
/**
 * 简析
 * 遍历获取总值 然后获取平均分进行比较
 */
console.log(betterThanAverage([89, 92, 68, 75], 75))
console.log(betterThanAverage2([89, 92, 68, 75], 89))
