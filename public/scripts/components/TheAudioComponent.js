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
               
                


                
            </div>       
        </div>
    </div>
    
    `,
    data() {
        return {
          
            
           
        }
    },
    created: function() {
        
        
        
    },
    methods: {
        
    }
}