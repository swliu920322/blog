var a = [
  {
    name: 1, label: 'aa', children: [
      {name: 2, label: 'ab'},
      {name: 3, label: 'abc'},
      {name: 4, label: 'abd'},
    ]
  },
  {
    name: 5, label: 'as',
    children: [
      {name: 6, label: 'af'},
      {name: 7, label: 'af'},
      {name: 8, label: 'af'},
    ]
  }, {
    name: 9, label: 'as'
  }
]

var aa = function ff(array) {
  array.forEach(i => {
    console.log(i.name)
    if (i.children) {
      aa(i.children)
    }
  })
}
aa(a)
