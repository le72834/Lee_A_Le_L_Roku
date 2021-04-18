export default {
    name: "AudioComponent",
    template: ` 
    <div class="container">
        <div class="row">
        <div class="nav-link row fixed-top">
                <ul>
                    <li><router-link to="/allmovies">MOVIES</router-link> </li>
                    <li> <router-link to="/audios">AUDIO</router-link></li>
                    <li> <router-link to="/tv">TVSHOWS</router-link></li>
            
                </ul>
            </div>
        </div>
        <div class="hero">
                <img src="images/hero_music.jpeg" alt="movie">
                <div class="hero-text">
                <h2>Welcome to Roku Flashback!</h2>
                <p>You are now in audio page!</p>
                </div>
            </div>
        <div class="music-box">
            <div class="music-con">
                    <img :src="'images/audio/' + currentMediaDetails.poster">
                    
            </div>
                <div class="music-info">
                    <h4 >{{currentMediaDetails.title}}</h4>
                    <p >{{currentMediaDetails.artist}}</p>
                    <audio controls muted :src="'audio/' + currentMediaDetails.audiosrc" class="fs-video"></audio>
                    
                </div>
        </div>
        <div class="thumb-wrapper clearfix music-pic">
                    <!-- <moviecomponent v-for="item in retrievedMedia" :movie="item" :key="item.id" ></moviecomponent> -->
                    <img v-for="media in retrievedMedia" :src="'images/audio/' + media.poster" alt="media thumb" class="img-thumbnail rounded float-left media-thumb" @click="switchCurrentMedia(media)">
                </div>
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
        this.loadMusic(null);
        
        
    },
    methods: {
        loadMusic(filter){
            let url = (filter == null) ? `api/audio` : `api/audio/${filter}`;
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
    }
}