// switch (key){
//     case Value:
//     break;
//     default:
//         break;

// }---->syntax

const month =3
switch (month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
        default:
            console.log("not valid ")
            break;
}


//flasy and truthy values are discussed in notes 
//nullish coalescing operator(??): null or undefined aaye toh 
let val1;
// val1=5??10
// val1=null??10  //if value is null then 10 is assinged 
val1=undefined ?? 15 //same for thhis also
console.log(val1)


//terniary operator

//condition? true:false
const icetea=100;
icetea>=80? console.log("yes"):console.log("no")