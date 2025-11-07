const main = document.getElementById("main-section")
const movieIds = JSON.parse(localStorage.getItem("movieId") || [])


if (movieIds.length > 0) {
    renderMovies();
} 

async function renderMovies(){
        const promises = movieIds.map( async movieId => {
            return fetch(`https://www.omdbapi.com/?apikey=a8db6146&i=${movieId}`)
            .then(res => res.json())
})
        const moviesInfo = await Promise.all(promises)
        console.log(moviesInfo)
        main.classList.add('main-movies')
        main.innerHTML = moviesInfo.map( movie => {
             return  `
                <div class="movies">
                    <div class="movie-title">
                        <h2>${movie.Title}</h2>
                        <p>${movie.imdbRating}</p>
                        <svg class="movie-rating" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                    <img class="movie-poster" alt="Poster Img Of ${movie.Title} " src="${movie.Poster}">
                    <h3> Released :${movie.Year}</h3>
                </div>
        `
        }).join('')
    } 

