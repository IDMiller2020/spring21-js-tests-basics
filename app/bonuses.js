//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  console.log(str.split(' '))
  let arr = str.split(' ')
  let cap
  let low
  let capWord
  for (let i=1; i < arr.length; i++) {
    low = arr[i][0]
    cap = arr[i][0].toUpperCase()
    capWord = arr[i].replace(low, cap)
    arr[i] = capWord
    }
  str = arr.join('')
  return str
  }