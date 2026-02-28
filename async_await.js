let p1 = new Promise((resolve,reject)=>{
    console.log(`Promise is pending`)
    setTimeout(()=>{
                resolve(true)
    },2000)
})
let p2 = new Promise((resolve,reject)=>{
    console.log(`Promise is pending`)
    setTimeout(()=>{
        reject(new Error("I'm an 404 error"))
    },2000)
})
console.log(p1);
console.log(p2);

p1.then((value)=>{
    console.log(value);
    
})
p2.then((value)=>{
    console.log(value);
},(error)=>{
console.log(`error occured`);

})

