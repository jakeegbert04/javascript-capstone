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
console.log(fetchUrl())

function usersArray(user) {
  const userArray = []
  for(let i = 0; i < user.length; i++) {
    userArray.push(user)
  
  }
  console.log(userArray)
}



function capsName(firstName, lastName) {
   return firstName[0].toUpperCase() + firstName.slice(1)+ ` ` + lastName[0].toUpperCase()
}

function addToPage(fullName) {
  const users = document.getElementById("users-wrapper")
  const nameDiv = document.createElement("div")
  const buttonDiv = document.createElement("div")
  const namePara = document.createElement("p")
  const weightSpan = document.createElement("span")
  const nameNode = document.createTextNode(`${fullName} : `)
  const weightNum = document.createTextNode("1")
  const add = document.createTextNode("+")
  const minus = document.createTextNode("-")
  const buttonAdd = document.createElement("button")
  const buttonMinus = document.createElement("button")
  


  nameDiv.appendChild(namePara)
  namePara.appendChild(nameNode)
  namePara.append(weightSpan)
  weightSpan.appendChild(weightNum)
  nameDiv.classList.add("all-users")
  users.appendChild(nameDiv)



  nameDiv.appendChild(buttonDiv)
  buttonDiv.appendChild(buttonAdd)
  buttonDiv.appendChild(buttonMinus)
  buttonAdd.appendChild(add)
  buttonMinus.appendChild(minus)
  users.appendChild(nameDiv)

}

// function usersArray(users){
//   const usersArray = []
//   for(const i in users) {
//     usersArray.push(users)
//   }
//   console.log(usersArray)
// }


// seperateNames()
// Focus on driving logic
//

async function main() {
  const data = await fetchUrl()
  // const userFrag = new DocumentFragment();

  data.forEach(user => {
    // createElements
    // create text nodes
    const nameNode = (`${capsName(user.first_name, user.last_name)}`)
    // console.log(nameNode)

    addToPage(nameNode)
    
    // userFrag.appendChild(nameNode)
    usersArray(nameNode)
    // return nameNode
  })

  // parentEl.appendChild(userFrag)
}

main()


// async main() -> control flow of app
 // getData()
 // queryDomElements
 // createElements
 // format elements -> separateNames(first, last) => formatted string : 
 // appendElements