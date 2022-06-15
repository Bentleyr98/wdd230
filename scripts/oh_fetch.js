const url = "https://pokeapi.co/api/v2/pokemon/ditto"

// async function getPoke(url){
//     const response = await fetch(url);
//     if (response.ok){
//         console.log(response);
//         const data = await response.json();

//         console.log(data);
//         console.log(data.name);
//         console.log('first');

//     } else{
//         console.log("not good, not good!");
//     }
// }

// console.log('second');
// getPoke(url);

fetch(url).then((response) => {
    if (response.ok){
        console.log('second');
        return response.json();
    } else{
        alert('error', response
        );
    }
    

}).then((data) => {
    results = data;
    console.log('first', results);
});