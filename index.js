// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        }),
    })
    .then(function(response){
        return response.json();
    })
    // .then(function(object){
    //     let objectDiv = document.createElement('objectDiv')
    //     objectDiv.innerHTML = object['id']
    //     document.body.appendChild(objectDiv)
    // })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    
    // .catch(function(error){
    //     let objectDiv = document.createElement('objectDiv')
    //     objectDiv.innerHTML = error.message
    //     document.body.appendChild(objectDiv)
    // })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   const configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });