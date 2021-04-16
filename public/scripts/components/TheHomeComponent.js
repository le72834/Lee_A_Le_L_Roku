import AudioComponent from './TheAudioComponent.js';
import TheMovieThumbnail from './TheMovieThumbnailComponent.js';
export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
        <component :is="this.activeComponent"></component>

        <!-- show media icons here -->
        <div class="row"> <!-- 2-up for nav and media info -->
            <nav class="col-12 col-sm-3 side-nav">
                <ul class="media-type">
                    <li v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                        <span>
                            <i v-bind:class="[media.iconClass]"></i>
                        </span>
                        
                        <span class="d-none d-md-block">{{ media.description }}</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    `,

    data: function() {
        return {
            activeComponent: TheMovieThumbnail,
            mediaTypes: [
                { iconClass: "fas fa-headphones", description: "audio", component: AudioComponent },
                { iconClass: "fas fa-film", description: "video", component: TheMovieThumbnail },
                { iconClass: "fas fa-tv", description: "television", component: AudioComponent }
            ]
        }
    },

    created: function() {
        this.$emit('setuser', this.currentuser);
        
    },

    methods: {
        switchMedia(theComponent){
            this.activeComponent = theComponent;
        }
    },
    
}