//primitive
//7types:string ,num,boolean,null,undefined,symbol,bigint

const score=100
const scorevalue=100.3 
const islogged = false
let useremail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

//non primitive 
//arrays,objects,functions
const heros=["shaktiman","doga","naagraj"];
let myobj={
    name:"bhumi",
    age:22,
}
const myfunction=function(){
    console.log("hello world");
}
console.log(typeof heros)

