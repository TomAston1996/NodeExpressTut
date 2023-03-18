const names = ['tom', 'mike', 'james'];

//names.forEach((name) => console.log(name));


//SYNCHRONOUS CALLBACK FUNCTION
const myForEach = (arr, cb) => {
    for (let i=0; i<arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}

myForEach(names, (name) => {
    console.log(name);
})

//ASYNCHRONOUS CALLBACK FUNCTION
const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json()) //.then to handle the response
    .then(data => {
        cb(data)
    }) //.then to callback the data
} 

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
})