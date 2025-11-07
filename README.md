# Movie Watchlist App

This is a solo project built as part of the Scrimba Full Stack Developer Career Path. The goal was to create a dynamic, multi-page web application that allows users to search for movies and manage a personal watchlist. The project focuses on clean JavaScript, asynchronous API calls, and local state management.

## Features

*   **Movie Search:** Search for movies by title using the OMDb API.
*   **Detailed Information:** View movie details including poster, rating, plot, and genre.
*   **Dynamic Watchlist:**
    *   Add movies to a personal watchlist from the search results.
    *   Remove movies from the watchlist.
    *   The UI instantly updates to show whether a movie is on the watchlist or not.
*   **Data Persistence:** The user's watchlist is saved to `localStorage`, so it persists across browser sessions.
*   **Dedicated Watchlist Page:** A separate page (`/watchlist.html`) that displays all the movies saved by the user.

## Core Concepts & Technologies Used

This project was a deep dive into vanilla JavaScript and modern web development practices. The key concepts covered include:

*   **HTML5 & CSS3:** For structure and styling.
*   **JavaScript (ES6+):**
    *   **Asynchronous JavaScript:**
        *   `fetch()` API for making requests to the OMDb API.
        *   `async/await` for handling promises in a clean and readable way.
        *   `Promise.all()` to efficiently fetch details for multiple movies at once.
    *   **DOM Manipulation:**
        *   Dynamically generating HTML from JavaScript data (`.map()` and `.join()`).
        *   Using `document.getElementById` to select elements.
        *   Mastering `addEventListener` with **Event Delegation** to handle clicks on dynamically created elements.
    *   **Local State Management:**
        *   Using Browser `localStorage` to persist the watchlist data.
        *   Correctly serializing (`JSON.stringify()`) and deserializing (`JSON.parse()`) data.
        *   Managing state across multiple pages.
    *   **Modern ES6+ Syntax:**
        *   `const` and `let` for variable declarations.
        *   Arrow Functions (`=>`).
        *   Template Literals for easy HTML string creation.
        *   Array methods like `.map()`, `.filter()`, and `.includes()`.

## How To Run

1.  Clone this repository to your local machine.
2.  Obtain a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).
3.  In both `index.js` and `watchlist.js`, replace the placeholder `YOUR_API_KEY` with your actual key in the `fetch` URLs.
4.  Open the `index.html` file in your browser.

## Acknowledgements

This project was built following the guidance and curriculum of the [Scrimba Frontend Developer Career Path](https://scrimba.com/). It was a challenging and incredibly rewarding experience that solidified fundamental concepts of frontend development.
