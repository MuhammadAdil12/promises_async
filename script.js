//! to see this code open the console in the browser


//callback Hell 

let order2 = ()=>{
    setTimeout(()=>{
        console.log("Mark said that he likes Apple");
            setTimeout(()=>{
                console.log("John said he also likes Apple");
                    setTimeout(()=>{
                        console.log("Abigail said but I like Watermelon");
                            setTimeout(()=>{
                                console.log("Adil said guys everyone knows that mangos are the best");
                                    setTimeout(()=>{
                                        console.log("Lisa replayed to adil and said that is true");
                                            
                                    }, 3000)
                            }, 2000)
                    }, 3000)
            }, 2000)
    }, 1000)
}

// order2()



//promise
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error) =>{
    console.log(`we have an error ${error}`);
  })


const getUser = new Promise ((res, rej)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            res([
              { name: "John", age: 19 },
              { name: "Adil", age: 20 },
              { name: "Lisa", age: 21 },
              { name: "Mark", age: 18 },
              { name: "Abigail", age: 20 },
            ])
        }else{
            rej("Error: Something went wrong");
        }
    })
})

getUser
.then((user)=> console.log(user))
.catch((error) => console.log(error))





// promise chaining

let shopOpen = true;

let conversation =  (time, word) => {
    return new Promise((res, rej) =>{
        if (shopOpen) {
            setTimeout(()=>{
                res(word())
            }, time)

        }else{
            rej()
        }
    })
  }

  conversation (1000, ()=> console.log("Mark said that he likes Apple"))

  .then(()=>{
    return conversation (2000, ()=> console.log("John said he also likes Apple"))
  })
  .then(()=>{
    return conversation (3000, ()=> console.log("Abigail said but I like Watermelon"))
  })
  .then(()=>{
    return conversation (2000, ()=> console.log("Adil said guys everyone knows that mangos are the best"))
  })
  .then(()=>{
    return conversation (3000, ()=> console.log("Lisa replayed to adil and said that is true"))
  })
  .catch((error)=>{
    console.log("there is no conversation going on");
  })
  .finally(()=>{
    console.log("I have no friends");
  })


  // promise.all    


function getData(endPoint){
  return new Promise((res, rej)=>{

    fetch(endPoint)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return("Something went wrong in promise.all function");
        }
      })
      .then((data) => {
        res(data);
      })
      .catch((error) => {
        rej(`Error: ${error}`);
      })
  })
}

let promiseData1 = getData("https://jsonplaceholder.typicode.com/todos/1")
let promiseData2 = getData("https://jsonplaceholder.typicode.com/todos/2")
let promiseData3 = getData("https://jsonplaceholder.typicode.com/todos/3")

Promise.all([promiseData1, promiseData2, promiseData3])
.then((proData) => console.log(proData))
.catch((error)=> console.log(error))



//async and await

async function fetchData(){
    try{
        const res =  await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
        console.log(res.status);
        let data = await res.json()
        // console.log(data);
        return data;
    }catch(error){
        console.log(`something went wrong ${error}`);
    }
}

let data = fetchData()
data.then((jsonData)=> console.log(jsonData))
.catch((error)=> console.log(error))
