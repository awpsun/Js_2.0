function orderGroceries(a){
  setTimeout(()=>{
    let kart = '🛒'
    console.log(`Shopping done ${kart}`)
    a(kart)
  },2000)
}

function paymentDone(kart){
  setTimeout(() => {
      console.log(`payment done ${kart}`)
  }, 3000);

}

orderGroceries(paymentDone)
console.log("Visited Mall")
