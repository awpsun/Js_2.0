async function harshit(){

let delhiWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`21 Degree`)
           
    },2000) 
})} 

let bangloreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`27 Degree`)
    },4000)
let weatherDelhi = await delhiWeather
let weatherBanglore = await bangloreWeather
return[weatherDelhi,weatherBanglore]

}
    harshit()