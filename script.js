function fetchUrl() {
  try{
   const responce = fetch("MOCK_DAT.json", {})
   .then(res => res.json())
   console.log("DATA: ", responce)
   return responce
  } catch (error) {
    console.error(error)
  }
}
// console.log(fetchUrl())


// async function renderuser


// fetch("MOCK_DATA.json",  {})

// .then(res => res.json())
// .then(data => seperateNames(data))
// .catch(err => console.log(err))


async function seperateNames() {
  const data = await fetchUrl()

  console.log(data)
  data?.forEach(x => {
    const firstName = x.first_name
    
    const lastName = x.last_name
    
    // console.log(firstName, lastName)
    let fullName = (firstName[0].toUpperCase() + firstName.slice(1)+ ` ` + lastName[0].toUpperCase())
    
    addToPage(fullName)
  })
}

function addToPage(fullName) {
  const users = document.getElementById("users-wrapper")
  const div = document.createElement("div")
  const buttonDiv = document.createElement("div")
  const para = document.createElement("p")
  const names = document.createTextNode(fullName)
  const add = document.createTextNode("+")
  const minus = document.createTextNode("-")
  const button1 = document.createElement("button")
  const button2 = document.createElement("button")
  
  
div.appendChild(para)
para.appendChild(names)
div.classList.add("all-users")
users.appendChild(div)

div.appendChild(buttonDiv)
buttonDiv.appendChild(button1)
buttonDiv.appendChild(button2)
button1.appendChild(add)
button2.appendChild(minus)
users.appendChild(div)



// div.appendChild(button1)
// button1.appendChild(add)
// users.appendChild(div)

// div.appendChild(button2)
// button2.appendChild(minus)
// users.appendChild(div)

}

seperateNames()





