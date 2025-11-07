const form = document.getElementById("search-form")
const inputValue = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main-section")
let dataArry 
let movieArry
function handleFormSubmit() {
    form.addEventListener('submit', async(e)=>{
        const value = inputValue.value
        e.preventDefault()
        const res = await fetch(`https://www.omdbapi.com/?apikey=a8db6146&s=${value}`)
        const data = await res.json()
        dataArry = data
        console.log(dataArry)
        renderData(dataArry)
})
}
console.log(dataArry)

handleFormSubmit()

async function renderData(){
    const savedWatchlistIDs = JSON.parse(localStorage.getItem('movieId')) || []
    if(dataArry.Response === "True") {
        const promises = dataArry.Search.map(async (movie) => {
            return  fetch(`https://www.omdbapi.com/?apikey=a8db6146&i=${movie.imdbID}`)
                    .then (res => res.json())
        })
        const moviesInfo = await Promise.all(promises)
        console.log(moviesInfo)
        main.classList.add('main-movies')
        main.innerHTML = moviesInfo.map( movie => {
            const isMovieSaved = savedWatchlistIDs.includes(movie.imdbID)
            let button
            if (isMovieSaved){
                button = `<button class="remove-from-watchlist-btn" data-imdbid="${movie.imdbID}">Remove From Watchlist</button>`
            } else {
                button = `<button class="add-to-watchlist-btn" data-imdbid="${movie.imdbID}">Add To Watchlist!</button>`
            }
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
                    <h4>${movie.Genre}</h4>
                    <p>${movie.Plot}</p>
                    ${button}
                </div>
        `
        }).join('')
    } else {
        main.textContent = "Sorry Something Wrong!"
    }

}


    main.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-watchlist-btn")) {
        const clickedMovie = e.target.dataset.imdbid
        const addedWatchlist = JSON.parse(localStorage.getItem('movieId')) || []
        if (!addedWatchlist.includes(clickedMovie)) {
            addedWatchlist.push(clickedMovie)
        }
        const newWatchlist = JSON.stringify(addedWatchlist)
        localStorage.setItem("movieId", newWatchlist)
        e.target.textContent = "Remove From Watchlist"
        e.target.classList.remove('add-to-watchlist-btn')
        e.target.classList.add('remove-from-watchlist-btn')
    }else if (e.target.classList.contains("remove-from-watchlist-btn")) {
         const removedMovieID = e.target.dataset.imdbid
         const watchlist = JSON.parse(localStorage.getItem('movieId')) || []
         const newWatchlist = watchlist.filter(movies => {
            return movies !== removedMovieID
})
         const newWatchlistJSON = JSON.stringify(newWatchlist);
         localStorage.setItem("movieId", newWatchlistJSON)
         e.target.textContent = "Add To Watchlist!"
         e.target.classList.remove('remove-from-watchlist-btn')
         e.target.classList.add('add-to-watchlist-btn')
    }
})




