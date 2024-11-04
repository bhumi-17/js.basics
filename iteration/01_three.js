// for of 
["",""]//strings in array
[[],{}]//objects in array
const arr =[1,2,3,4,5]

for(const num of arr){
console.log(num)
}

const greetings="hello world"
for(const greet of greetings){
    if(greet==" ")continue;
    console.log(`each char is ${greet}`)
}

//maps 
const map=new Map()
console.log(typeof map)// its an object
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
map.set('IND',"INDIA")
map.set('usa',"america")
map.set('IND',"INDIA")
console.log(map)
// agr seperately print krvana hua toh [key,value]
for (const [key,value] of map) {
    console.log(key,value)
}

//for of loop on object 
// const myobject={
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// for (const [key,value] of myobject) {
//     console.log(key,value)
// }//this will give an error that this object is not iterable 


//for in loop
// you can use for in for iteration on objects rather than using for on 

const firstobject={
    js:'javascript',
    cpp:`c++`,
    rb:'ruby',
    swift:'swift by apple'
}
for(const key in firstobject){
    console.log(`${key} shorcut if for ${firstobject[key]}`)
}

// keys print hongi sirf key print krvane se for of me values print horhi thi direct 
const programming=["js","ruby","cpp"]
for (const key in programming) {
   console.log(key)
   console.log(programming[key])
}

// for each loop

const coding=["js","cpp","ruby","python"]
// callback function me name nhi hoga 
coding.forEach( function (item) {
console.log(item)
})

//you can also use arrow function
coding.forEach(  (val) =>{
    console.log(val)
})
//external agar funciton defined ho toh
function printme(item){
    console.log(item)
}
coding.forEach(printme);


//for each me not only hum value but baaki cheezo ka bhi access hota h like
// val,index,complete arr


const mycoding=[
    {
        lang:"javascript",
        langfile:"js"
    },
    {
        lang:"java",
        langfile:"java"

    },
    {
        lang:"python",
        langfile:"py"
    }
]

mycoding.forEach( function (item) {
    console.log(item)//you can access individual property by using dot
})