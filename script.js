const login = {email: "jake@devpipeline.com",password: "little"}

function fetchUrl() {
  try{
   const responce = fetch("https://devpipeline-mock-api.onrender.com/api/auth/login", {
    credentials: "same-origin",
    method: "post",
    body: JSON.stringify(login),
    headers: {
      "content-type" : "application/json"
  }
   })
   .then( res => res.json())
  //  console.log("DATA: ", responce)
   return responce
  } catch (error) {
    console.error(error)
  }
}
const allUsers = []
const namesArray = []
// console.log(fetchUrl())


function capsName(firstName, lastName) {
   return firstName[0].toUpperCase() + firstName.slice(1)+ ` ` + lastName[0].toUpperCase()
}

let weightArray = []

function addToPage(fullName) {
  const nameNode = document.createTextNode(`${fullName} : `)
  const weightNum = document.createTextNode(1)
  const users = document.getElementById("users-wrapper")
  const nameDiv = document.createElement("div")
  const buttonDiv = document.createElement("div")
  const namePara = document.createElement("p")
  const weightSpan = document.createElement("span")
  const add = document.createTextNode("+")
  const minus = document.createTextNode("-")
  const buttonAdd = document.createElement("button")
  const buttonMinus = document.createElement("button")
  
  weightArray = [...namesArray]
  
  nameDiv.appendChild(namePara)
  namePara.appendChild(nameNode)
  namePara.append(weightSpan)
  weightSpan.appendChild(weightNum)
  weightSpan.classList.add("user-weight")
  nameDiv.classList.add("all-users")
  users.appendChild(nameDiv)

  nameDiv.appendChild(buttonDiv)
  buttonDiv.appendChild(buttonAdd)
  buttonDiv.appendChild(buttonMinus)
  buttonAdd.appendChild(add)
  buttonAdd.classList.add("click-add")
  buttonMinus.appendChild(minus)
  users.appendChild(nameDiv)
  
document.getElementsByClassName("all-users")
  
buttonAdd.addEventListener("click", function(e) {
  e.target.parentElement.lastChild.disabled = false
  e.target.parentElement.parentElement.firstChild.firstElementChild.innerText++
  weightArray.push(fullName)
  console.log(weightArray) 
})
  const decreaseNum = buttonMinus.addEventListener("click", function(e) {
    const weight = e.target.parentElement.previousElementSibling.querySelector("span").innerText
    console.dir(e.target)
    if(weight === "0"){
      e.target.disabled = true
    } else {
      // e.target.disabled = false
      e.target.parentElement.parentElement.firstChild.firstElementChild.innerText--
      
      const index = weightArray.indexOf(fullName);
      if (index > -1) {
      weightArray.splice(index, 1);
      console.log(weightArray)
      }
    }
   
    
  }
)}
let userArray =[]

// console.log(userArray)

async function randomName(){
  const randomIndex = Math.floor(Math.random() * userArray.length);
  const randomUser = userArray[randomIndex]
  const index = userArray.indexOf(randomUser);
  const nameTextNone = document.createTextNode(randomUser)
  removeDisplay()
  await timer()
  document.getElementsByClassName("display")[0].innerText = randomUser
  addDisplay()
  

  if(userArray.length === 1) {
    userArray = [...weightArray]
    // console.log("hello")
  } else {
    userArray.splice(index, 1);
  }
  document.getElementsByClassName("display")
  // console.log(userArray.length)
  // console.log(index)
  console.log(userArray)
  console.log(randomUser)
}

function removeDisplay() {
  document.getElementsByClassName("display")[0].style.display = "none";
  document.getElementsByClassName("loader")[0].style.display = "block";
  document.getElementsByClassName("random-button")[0].style.display = "none";
  // displayDiv.replaceWith(spinDiv)
}
function addDisplay() {
  document.getElementsByClassName("display")[0].style.display = "block";
  document.getElementsByClassName("loader")[0].style.display = "none";
  document.getElementsByClassName("random-button")[0].style.display = "block";

}

function timer() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow");
      console.log("slow promise is done");
    }, 1000);
  })
}


// changeDisplay()

function seperateName() {
  allUsers.forEach(user => {
    const nameNode = (`${capsName(user.first_name, user.last_name)}`)
    namesArray.push(nameNode)
    addToPage(nameNode)
    userArray.push(nameNode)
    return nameNode
    // console.log(nameNode)
  })
  
  
}


async function main() {
  const data = await fetchUrl()
  // console.log(data["users"])
  data["users"].forEach(user => {
    allUsers.push(user)
  })
  seperateName(allUsers)
  return data
}

main()
