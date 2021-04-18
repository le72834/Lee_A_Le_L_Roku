export default {
    name: "TheMovieThumbnail",
    props: ["movie"],
    template: `<div class="movie-thumb">
    <img :src='"images/ " + movie.movie_cover' alt="movie thumb">
    
    
    
    </div>`
}