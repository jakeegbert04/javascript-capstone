function fetchUrl() {
  try{
   const responce = fetch("MOCK_DATA.json", {})
   .then( res => res.json())
  //  console.log("DATA: ", responce)
   return responce
  } catch (error) {
    console.error(error)
  }
}
// console.log(fetchUrl())


function capsName(firstName, lastName) {
   return firstName[0].toUpperCase() + firstName.slice(1)+ ` ` + lastName[0].toUpperCase()
}

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
  const weight = document.createElement("span").innerHTML
  


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
  // buttonAdd.onclick = update
  buttonMinus.appendChild(minus)
  users.appendChild(nameDiv)
  
  const allUsersDiv = document.getElementsByClassName("all-users")
  // console.log(allUsersDiv)
  const updateNum = buttonAdd.addEventListener("click", function(e) {
      e.target.parentElement.parentElement.firstChild.firstElementChild.innerText++
      allUsers.forEach(user => {
        user["weight"] ++
      })
    })
  const decreaseNum = buttonMinus.addEventListener("click", function(e) {
    e.target.parentElement.parentElement.firstChild.firstElementChild.innerText--
    allUsers.forEach(user => {
      user["weight"] --
    })
  })
    
  }
  const userWeight = []
  function weight() {
    allUsers.forEach(user => {
      const weight = document.querySelector("span").innerHTML
      // userWeight.push(weight)
      user["weight"] = weight
      // console.log(userWeight)
    })
}


function seperateName() {
  allUsers.forEach(user => {
    const nameNode = (`${capsName(user.first_name, user.last_name)}`)
    addToPage(nameNode)

    // console.log(nameNode)
  })
    
    
}
const allUsers = []
async function main() {
    const data = await fetchUrl()
    data.forEach(user => {
      allUsers.push(user)
    })
    seperateName(allUsers)
    weight(allUsers)
    // console.log(allUsers)


    // const userFrag = new DocumentFragment();
    // console.log(data)

    // userFrag.appendChild(nameNode)
    // usersArray(nameNode)
    // return nameNode
  
    return data
  // parentEl.appendChild(userFrag)
}

main()

// console.log(document.getElementsByClassName())

// async main() -> control flow of app
 // getData()
 // queryDomElements
 // createElements
 // format elements -> separateNames(first, last) => formatted string : 
 // appendElements