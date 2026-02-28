let options = {
    method:"POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    }

//     fetch('https://www.jsonplaceholder.typicode.com/posts', options).then((response)=>response.json()).then((json)=>console.log(json)).catch((err)=>console.log("fetch error",err))

async function createPost(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts',options)
        const data = await response.json()
        console.log("Success", data);

    }catch(error){
        console.error("Error:", error)
    }
}
createPost()


