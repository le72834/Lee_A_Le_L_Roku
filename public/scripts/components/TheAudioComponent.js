export default {
    name: "AudioComponent",
    template: ` 
    <div class="container">
        <div class="row">
        <div class="col-12 col-sm-9 media-info">
                <!-- genres for video -->
               
                <ul class="media-genres">
                    <li>
                        <a href="" @click.prevent="filterMedia('Action')" >Action</a>
                    </li>
                    <li>
                        <a href="comedy">Comedy</a>
                    </li>
                    <li>
                        <a href="family">Family</a>
                    </li>
                    <li>
                        <a href="fantasyr">Fantasy</a>
                    </li>
                    <li>
                        <a href="all">All</a>
                    </li>
                </ul>
               
                


                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedVideo" :src="'images/movies/' + item.movies_cover" alt="media thumb" class="img-thumbnail rounded float-left media-thumb" @click="loadNewMovie(item)">
                </div>
            </div>       
        </div>
    </div>
    
    `,
    data() {
        return {
          
            currentMediaDetails: {},
            allRetrievedVideo: []
           
        }
    },
    created: function() {
        
        this.retrieveVideoContent();
        
    },
    methods: {
        filterMedia(filter) {
            let url=`./admin/index.php?media=movies&filter=${filter}`;
            fetch(url)
            .then(res =>res.json())
            .then(data => {
                this.allRetrievedVideo = data;
                this.currentMediaDetails = data[0];
            })
        },
        retrieveVideoContent() {
            if(localStorage.getItem("cachedVideo")){
                this.allRetrievedVideo = JSON.parse(localStorage.getItem("cachedVideo"));
                this.currentMediaDetails = this.allRetrievedVideo[0];
            }else {
                let url = './admin/index.php?media=movies';
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedVideo", JSON.stringify(data));
                    this.allRetrievedVideo = data;
                    this.currentMediaDetails = data[0];
                })
            }
        },
        loadMovie(movie){
            this.currentMediaDetails = movie;
        },
    }
}