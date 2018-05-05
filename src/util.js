// 对对象(=的右边)进行声明暴露

export let sum = (...x) => {
  let sum1 = 0
  for (let i of x) {
    sum1 += i
  }
  return sum1
}

export let minus = (x = 100, ...y) => {
  for (let i of y) {
    x -= i
  }
  return x
}