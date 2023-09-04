/*
 * @Author: Tmier
 * @Date: 2023-09-04 21:13:09
 * @LastEditTime: 2023-09-04 21:56:01
 * @LastEditors: Tmier
 * @Description: 字符串回文
 *
 */
// 比如下面的单词: mom | racecar | kayak
// 给定一个单词 创建一个函数来检查它是否是回文, 如: isPalindrome('mom') -> true,  isPalindrome('crazy') -> false
// 第一种
const isPalindrome = (str) => {
  return [...str].reverse().join('') == str
  /**
   * 简析
   * ...str 做一个浅拷贝
   * reverse 翻转一下字符串 并不去影响原字符串
   * join 拼接下
   */
}

// 第2种
const isPalindrome2 = (str) => {
  return str === str.split('').reverse().join('')
  /**
   * 简析
   * split 把字符串分割成单个字符串的数组
   * reverse 不伤原始数据反转一下
   * join 拼接下
   */
}

// 第3种 比较野蛮
const isPalindrome3 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
  /**
   * 通过一个for循环 根据字符串的索引前后作对比得出结果
   */
}
// 验证一下
isPalindrome('aaa')
console.log('isPalindrome', isPalindrome('alsd'))
isPalindrome('abccba')
console.log('isPalindrome', isPalindrome('abccba'))
isPalindrome2('abccba')
console.log('isPalindrome2', isPalindrome2('abccba'))
isPalindrome3('abccba')
console.log('isPalindrome3', isPalindrome3('abccba'))
