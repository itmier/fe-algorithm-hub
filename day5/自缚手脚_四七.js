// 这个题有点意思 不过看看了解下就得了
/**
 * 简单的规则：
 * 您的函数应接受输入4和7。
 * 如果输入4，函数应返回7。如果输入7，函数应返回4。
 * 输入的其他任何内容都应返回 0。
 * 只有一个要求，您的函数不能包含if语句，switch语句或三元运算符（或eval函数，因为您可以绕开if要求来使用它）。
 * 有一些非常简单的方法可以解决此问题，但是我鼓励您尝试并尽可能发挥创造力。
 * 祝好运！
 */

function fourSeven(val) {
  const a = {
    4: 7,
    7: 4
  }
  console.log(a[val] || 0) // 直接在这打印了...
  return a[val] || 0
}

fourSeven(4)
fourSeven(7)
fourSeven(100)

function fourSeven2(val) {
  while (val === 4) {
    console.log(7)
    return 7
  }
  while (val === 7) {
    console.log(4)
    return 4
  }
  console.log(0)
  return 0
}

fourSeven(4)
fourSeven(7)
fourSeven(100)
