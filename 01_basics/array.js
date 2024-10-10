// */const myarr= [0,8,7,3,4,5,true]
// console.log(myarr[0])
// const myarr2=new Array(1,2,3,4)
// console.log(myarr2[1])
// //ARRAYMETHODS
// myarr.push(8)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)
// myarr.unshift(18)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)
// console.log(myarr.includes(3))
// console.log(myarr.indexOf(3))
// console.log(myarr.indexOf(9))//this will show do not exist or-1
// console.log(typeof myarr)
// const newarr=myarr.join()
// console.log(typeof newarr)
// //slice,splice
// console.log("A",myarr);
// const myn1=myarr.slice(1,2)
// console.log("B",myn1)
// const myn2=myarr.splice(1,3)
// console.log("C",myn2)
// 
const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["suoerman","flash","batman"]
// marvel_heroes.push(dc_heroes)//same can be achieved by concat
//console.log(marvel_heroes)
const allheroes=marvel_heroes.concat(dc_heroes)
console.log(allheroes)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("bhumika"))//-->checks whether its array ornot
console.log(Array.from("bhumika"))
console.log(Array.from({name:"bhumika"}))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

