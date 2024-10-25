//if statement 
//if(condition){}
//comparison operators--<,>,<=,>=,==,!=,===(also checks the datatype)
const score=200;
if(score>100){
    const power ="fly"
    console.log(`user power:${power}`);
}
// console.log(`user power:${power}`);//will give error as of scope definiton
//but if var keyword is used then it vcan be accessed outside the scope also

//shorthand notation--if() console.log()or any executable

//else if() {}-->used for checking multiple conditions 


const userloggedin=true;
const debitcard=true
if(userloggedin && debitcard){
    console.log("allow to buy a course");
}
// or operator ||
