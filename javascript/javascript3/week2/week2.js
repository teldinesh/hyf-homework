//Create an array of bad movies

const moviesURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(moviesURL)
.then(response => response.json())
.then(data => {
    const badMovies = data.filter(movie => movie.rating <= 5);
    badMovies.forEach(element => {
        element.title;
        console.log(element.title);
    })
});


//Create an array of bad movies since year 2000

//const moviesURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(moviesURL)
.then(response => response.json())
.then(data => {
    const badMovies = data.filter(movie => (movie.rating <= 5));
    const badMoviesAfterYear =  badMovies.filter (movie => (movie.year = 2000));
    badMoviesAfterYear.forEach(element => {
        element.title;
        console.log(element.title);
    })
}); 


//Promise that Fetch and Wait to resolve after set time

const apiURL = 'https://reqres.in/api/products/3';
new Promise((resolve) => {
    setTimeout(() => {
        fetch(apiURL)
        .then(response => response.json())
        .then(jsonData => {
            resolve(jsonData);
            console.log('Log :', jsonData.data.name);
        })
    }, 4000)
})


//Promise that resolves after set time

function setTimeoutPromise(time){
    return new Promise ((resolve, reject) => {
        if (isNaN(time)){
            reject(error);
        }
        setTimeout(resolve,time);
    });
}

setTimeoutPromise(5000)
.then(() => {
    console.log("Called after 5 seconds");
  });