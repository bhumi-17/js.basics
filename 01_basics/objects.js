// // singleton-->by constructor
// //obj literals
// const mySym=Symbol("key1")
// const jsuser={
//     name:"bhumika",
//     "fullname":"bhumi",
//     [mySym]:"mykey1",
//     age:21,
//     location:"jaipur",
//     isloggedin:false,
//     email:"bhumikaverma88877@gmail.com",
//     lastloggedindays:["monday","saturday"],

// }
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser.fullname)
// console.log(jsuser["fullname"])
// console.log(jsuser[mySym])
// jsuser.email="bhumi@123.com"
// // Object.freeze(jsuser)//-->ab koi change nhi hongy kyuki object  freeze hogya
// jsuser.email="bhumi@233.com"
// console.log(jsuser.email)
// console.log(jsuser)
// jsuser.greeting=function(){
//     console.log("hello");
// }
// jsuser.greeting2=function(){
//     console.log(`hello there,${this.name}`)
// }
// console.log(jsuser.greeting)
// console.log(jsuser.greeting())
// console.log(jsuser.greeting2())

const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false
// console.log(tinderuser)
//nested--->

const regularuser={
    email:"bhumi@123gmail.com",
    fullname:{
        userfullname:{
            firstname:"bhumika",
            lastname:"verma"
        }
    }
}
console.log(regularuser.fullname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj3)
console.log(obj4)
