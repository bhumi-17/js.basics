function saymyname(){
    console.log("B")
    console.log("H")
    console.log("U")
    console.log("M")
    console.log("I")
    
}
//saymyname()

// function addtwonum(Number1,Number2){
//    console.log(Number1+Number2)
// }
// const result =addtwonum(3,5)
// console.log(result)//iska o/p undefined hoga kyuki ye function vali value return nhi hui
function addtwonum(Number1,Number2){
    // let result=Number1+Number2
    // return result
    return Number1+Number2
 }
 const result =addtwonum(3,5)
 //console.log(result)//yaha result horha h isliye show krega

 function loginusermesg(username){
    return `${username} just logged in`
 }
//  console.log(loginusermesg("bhumi"))
//  console.log(loginusermesg())//if no value passed it will show undefined

 function loginusermesg(username){
    if(username===undefined){
    console.log("please enter a username")
    return}
    return `${username} just logged in`
 }
//  console.log(loginusermesg())
//  console.log(loginusermesg("bhumi"))

//SHOPPING-CART-CALCULATE

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500))

//handling objects in functions
const user={
    username:"shivangi",
    price:"2rupee"
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)
//you can pass direct object too without predefining it
handleobject({
    username:"sam",
    price:378
})
//handling array in funcitons
const mynewarray=[200,300,188,799]
function returnvalue(getArray){
    for(let i=0;i<getArray.length;i++){
    console.log(getArray[i]);
    }

}
console.log(returnvalue(mynewarray));
console.log(returnvalue([200,3000,500,100]));
