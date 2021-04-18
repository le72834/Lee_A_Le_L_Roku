// import AudioComponent from './TheAudioComponent.js';
// import TheMovieThumbnail from './TheMovieThumbnailComponent.js';
//import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
       
        <div class="nav-link row fixed-top">
            <ul>
                <li><router-link to="/allmovies">MOVIES</router-link> </li>
                <li> <router-link to="/audios">AUDIO</router-link></li>
                <li> <router-link to="/tv">TVSHOWS</router-link></li>
           
            </ul>
        </div>
            <div class="row hero-img">
                <div class="col-12 order-1 order-md-2 col-md-9 media-container home-pic">
                    <video src="video/Deadpool.mp4"></video>
                
                </div>
                <div class="col-12 order-2 order-md-1 col-md-3 media-container home-info">
                    <h2>Welcome to Roku Flashback!</h2>
                    <p>You can discover movies, audios and tv shows at here!</p>
                   
                </div>
            </div>
            <div class="slider">
                <h2>Your favourite channels all in one place.</h2>
            </div>
            <div class="thumb-wrapper clearfix">
            <img v-for="media in retrievedMedia" :src="'images/' + media.movies_cover" alt="media thumb" class="img-thumbnail rounded float-left media-thumb">
            </div>
    </div>
    `,

    data: function() {
        return {
            retrievedMedia: [],
        }
    },

    created: function() {
        this.$emit('setuser', this.currentuser);
        this.loadMedia(null);
        
    },

    methods: {
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
            // showMovie() {
            //     this.$router.push({name: "allmovie"});
            // }
    },
    
}