//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
    
}//-->block scope

for (let i = 0; i <=10; i++) {
   console.log(`outer loop value:${i}`);
   for(let j=0;j<=10;j++){
    //console.log(`inner loop value ${j} and outer loop is ${i}`);
    //console.log(i*j)
   }
    
}
let myarray=["flash","batman","catfish"]
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element)
    
}
