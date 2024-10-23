// const user={
//     username:"bhumi",
//     price:999,

//     welcome:function(){
//         console.log(`${this.username},"welcome to website`);
//         console.log(this)
//     }
    
//}
// user.welcome()
// user.username="sam"
// user.welcome()

// function chai(){
//     console.log(this)
// }
// chai()

//another way to declare a function
// const chai =function(){
//     let username="bhumi"
//     console.log(this.username)
// }
//chai()//this will also give undefined
//way to declare arrow function
//basic
// const arrowfunc =()=>{
//     let username="bhumi"
//     console.log(this.username)
// }
// arrowfunc()//here also undefined


//implicit return

// const addtwo=(num1,num2) => num1+num2
// console.log(addtwo(3,7))

//immediately invoked function expression (iife)
(()=> {
    console.log(`db connected`);
})();
// or you can write called named iife
(function chai(name){
    console.log(`hey,${name}`)
})("bhumi");//here bhumi is an arguement
