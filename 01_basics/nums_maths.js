const score=400//implicit defined by js as number
console.log(score)
//here explicit defined
// const balance=new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(typeof balance)
// console.log(balance.toFixed(1))
// const othernumber=23.7864
// console.log(othernumber.toPrecision(5))
// const hundreds=10000
// console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++maths++++++++++++default(library)ofJS
console.log(Math)
console.log(Math.abs(-2))
console.log(Math.round(-2.78))
console.log(Math.ceil(4.2));
console.log(Math.floor(3.7))
console.log(Math.min(6,4,5,7))
console.log(Math.random())//always lies between 0and1
console.log((Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)