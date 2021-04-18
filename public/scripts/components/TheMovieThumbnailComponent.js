import MovieComponent from './TheMovieComponent.js';

export default {
    name: "TheMovieThumbnail",
    

    template: `
    <div class="container">
        <div class="nav-link row fixed-top">
                <ul>
                    <li><router-link to="/allmovies">MOVIES</router-link> </li>
                    <li> <router-link to="/audios">AUDIO</router-link></li>
                    <li> <router-link to="/tv">TVSHOWS</router-link></li>
            
                </ul>
            </div>
            <div class="hero">
                <img src="images/hero_movie.jpeg" alt="movie">
                <div class="hero-text">
                <h2>Welcome to Roku Flashback!</h2>
                <p>You are now in movies page!</p>
                </div>
            </div>
            <h3 class="recommend">Recommend for you:</h3>
        <div class="row movie-con">
            
                <div class="col-12 order-2 order-md-1 col-md-3 media-container movie-text">
                    <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
                    <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                    <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
                    <span class="media-year">Released in {{currentMediaDetails.movies_year}}</span>
                </div>

                <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                    <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
                </div>
            </div>

        <div class="row"> <!-- 2-up for nav and media info -->
            

            <div class="col-12 col-sm-9 media-info">
            <h2 @click="filterMovie(null)">Movies <span v-if="filter"> {{filter}}</span></h2>
           
            
                <!-- genres for video -->
                <ul class="media-genres">
                
                    <li>
                        <a href="" @click.prevent="filterMovie('Action')">Action</a>
                    </li>
                    <li>
                        <a href="" @click.prevent="filterMovie('Comedy')">Comedy</a>
                    </li>
                    <li>
                        <a href="" @click.prevent="filterMovie('Family')">Family</a>
                    </li>
                    <li>
                        <a href=""@click.prevent="filterMovie('Fantasy')">Fantasy</a>
                    </li>
                    <li>
                        <a href="" @click.prevent="filterMovie('All')">All</a>
                    </li>
                   
                </ul>

                <div class="thumb-wrapper clearfix movie2">
                    <!-- <moviecomponent v-for="item in retrievedMedia" :movie="item" :key="item.id" ></moviecomponent> -->
                    <img v-for="media in retrievedMedia" :src="'images/' + media.movies_cover" alt="media thumb" class="img-thumbnail rounded float-left media-thumb" @click="switchCurrentMedia(media)">
                </div>
            </div>       
        </div> <!-- end 2-up for media info -->
    </div>
    `,

    data() {
        return {
            currentMediaDetails: {},
            retrievedMedia: [],
            filter: null
        }
    },

    created: function() {
        this.loadMedia(null);
        
    },

    methods: {
        filterMovie(filter){
            this.filter = filter;
            if(filter === 'All'){
                this.loadMedia(null);
            } else {
                this.loadMedia(filter);
            }
        },
        loadMedia(filter) {
        // fetch data here
        let url = (filter == null) ? `api/movies` : `api/movies/filter/${filter}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.retrievedMedia = data;
            this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];
        })
        .catch(err => console.log(err));
        },
        switchCurrentMedia(media) {
            this.currentMediaDetails = media;
        }
       
    },
    components: {
        moviecomponent: MovieComponent,
    }
}