
// //takes two arguments (second is optional). A URL and request settings
// const fetchin = fetch('https://jsonplaceholder.typicode.com/users', {})

// //returns a promise object
// console.log(fetchin);


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if(response.ok){ 
        console.log('success!') //check that the response is good
        return response.json() //return data
    }
})
.then(data => console.log(data))
.catch(error => console.log('error'))