const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    //DB calls,cryptograph,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // this is used to promiseOne.then
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// without making variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");  
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({
        username: "Dhruv", email: "chai@example.com"
      })
    },1000)
})

promiseThree.then(function(user){
   console.log(user);
   
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false
       if(!error){
        resolve({username: "hitesh" , password: "123",})
       }
       else{
        reject('ERROR: Something went wrong')
       }
    },1000)
})


// we use catch because we use reject in upper function
promiseFour.then(function(user){
    console.log(user);
    return user.password 
}).catch(function(error){
    console.log(error);
}).then((pass)=>{
    console.log(pass);
}).finally(() => console.log("the promise is either resolve or reject")
 )

 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
 })


 // asymc await ke tarike se call karna
 // try and catch for reject 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);   
    }  
}

consumePromiseFive()


//with async await //
// async function getAllUsers() {
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E: ",error);
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).catch(function(error){
  console.log(error);
  
}).then(function(data){
  console.log(data);
})     



                         