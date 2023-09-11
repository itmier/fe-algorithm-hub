// 这个我也不晓得是不是算法问题 反正是最近刚遇到的一个小场景: 通过一个key, 可以拿到它的祖级数据,然后做一个类似面包屑的输出
// 写一个函数, 参数1为一个Array的tree数据(包含key, value, children), 参数2为一个key(key为tree里某一层级的key), 输出以'/'连接的字符串

/**
 * 简析
 * 定义了一个key value键值对
 * loops实现了键值对的填充, 使各层级的数据都通过key可以直接拿到
 * 在loops中通过对node的封装, 可以实现获取祖级所有元素, 例如key, label等
 * getPath通过先拿到最小单位的数据, 通过loopsf=封装的parent字段, 拿到与父级的关系,然后通过while与valueMap结合, 实现依次向上获取父级元素, 通过unshift依次向前填充祖级数据,遇到undefined结束
 */
const getFullPath = (dataList, findKey) => {
  const valueMap = {}
  function loops(list, parent) {
    return (list || []).map(({ children, key, label }) => {
      const node = (valueMap[key] = {
        parent,
        key,
        label
      })
      node.children = loops(children, node)
      return node
    })
  }
  loops(dataList)
  function getPath(key) {
    const path = []
    let current = valueMap[key]
    while (current) {
      path.unshift(current.label)
      current = current.parent
    }
    return path || []
  }
  return getPath(findKey)
}
const data = [
  {
    label: '超人前传',
    key: 'superman',
    children: [
      {
        label: '第一季',
        key: 'superman-1',
        children: [
          {
            label: '第一集',
            key: 'superman-1-1'
          },
          {
            label: '第二集',
            key: 'superman-1-2'
          },
          {
            label: '第三集',
            key: 'superman-1-3'
          },
          {
            label: '第四集',
            key: 'superman-1-4'
          },
          {
            label: '第五集',
            key: 'superman-1-5'
          },
          {
            label: '第六集',
            key: 'superman-1-6'
          }
        ]
      },
      {
        label: '第二季',
        key: 'superman-2',
        children: [
          {
            label: '第一集',
            key: 'superman-2-1'
          },
          {
            label: '第二集',
            key: 'superman-2-2'
          },
          {
            label: '第三集',
            key: 'superman-2-3'
          },
          {
            label: '第四集',
            key: 'superman-2-4'
          },
          {
            label: '第五集',
            key: 'superman-2-5'
          },
          {
            label: '第六集',
            key: 'superman-2-6'
          }
        ]
      },
      {
        label: '第三季',
        key: 'superman-3',
        children: [
          {
            label: '第一集',
            key: 'superman-3-1'
          },
          {
            label: '第二集',
            key: 'superman-3-2'
          },
          {
            label: '第三集',
            key: 'superman-3-3'
          },
          {
            label: '第四集',
            key: 'superman-3-4'
          },
          {
            label: '第五集',
            key: 'superman-3-5'
          },
          {
            label: '第六集',
            key: 'superman-3-6'
          }
        ]
      }
    ]
  }
]
let result = getFullPath(data, 'superman-3-2')
console.log(result) // output: [ '超人前传', '第三季', '第二集' ]
