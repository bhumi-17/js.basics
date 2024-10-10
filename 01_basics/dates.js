let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)
let mycreatedate=new Date(2025,0,3,4,7)
console.log(mycreatedate.toString())
let mycreateddate=new Date("2024-09-13")
console.log(mycreateddate.toLocaleString())

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())//days initialise from 1
//`${newDate.getDay()}and the time is`

