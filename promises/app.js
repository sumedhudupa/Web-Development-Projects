//bob
// let makePromise = ()=> {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()>0.5){
//                 return resolve(Math.random())
//             }
//             return reject("Noooo, below 0.5")
//         },200)
//     });
// }
// bob=makePromise()
// bob.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })
// console.log("Interpreter reached the end")

// async function makePromise(){
//         if(Math.random()>0.5){
//             return "hello world"
//         }
//         throw "less than 0.5"
// }
// bob=makePromise().then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }
// )
async function makePromise(){
        if(Math.random()>0.5){
            return "hello world"
        }
        throw "less than 0.5"
}
async function callMyPromise(){
    try{
        let bob=await makePromise();
        console.log(bob);
    }
    catch(error){
        console.log("ERRRROOOORRR: ",error)
    }
}