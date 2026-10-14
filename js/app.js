
const movies = [
    {
        title: "Interstellar",
        rating: 8.6,
        genre: "Sci-Fi",
        poster: "assets/images/interstellar.jpg"
    },
    {
        title: "Inception",
        rating: 8.8,
        genre: "Sci-Fi, Thriller",
        poster: "assets/images/inception.jpg"
    },
    {
        title: "Snatch",
        rating: 8.5,
        genre: "Crime, Comedy",
        poster: "assets/images/snatch.jpg"
    }
];

const movieContainer = document.querySelector(".movie-container");

movies.forEach(function(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
        <img
            class="poster"
            src="${movie.poster}"
            alt="${movie.title} movie poster"
        >

        <h3>${movie.title}</h3>
        <p class="rating">⭐ ${movie.rating}</p>
        <p class="genre">${movie.genre}</p>
        <button>View Details</button>
    `;

    movieContainer.appendChild(card);
});
