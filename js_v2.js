function gotoMall(nextStep){
    setTimeout(()=>{
        console.log("Mall Reached")
        nextStep(checkoutKart)
    },2000)
}

function getKart(nextStep){
    setTimeout(()=>{
        let kart = '🛒'
        console.log(`${kart} is Got`)
        nextStep(kart)
    },2000)
}

function checkoutKart(kart){
setTimeout(()=>{
    console.log(`${kart} is checked out Payment Done`)
},1000)
}

gotoMall(()=>
{
    getKart((kart)=>{
            checkoutKart(kart)
})
})