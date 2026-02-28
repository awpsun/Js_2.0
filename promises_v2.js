let p1 = new Promise((resolve,reject)=>{
    console.log(`Async Await`)
    setTimeout(()=>{
        console.log(`Promise is going on`);
        resolve(10)
    },3000)
})
p1.then((value)=>{
    console.log(value)
    let p2= new Promise((resolve,reject)=>{
        resolve("Promise 2")
        return p2
    })
}).then((value)=>{
    console.log(`thrid task is done`);
    
}).then(()=>{
    console.log(`fourth task is done`);
    
})