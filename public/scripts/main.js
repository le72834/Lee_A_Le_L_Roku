import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';
import AudioComponent from './components/TheAudioComponent.js';
import MovieThumbnail from './components/TheMovieThumbnailComponent.js';
import TVComponent from './components/TVComponent.js';


const router = new VueRouter ({
    routes: [
        {path: '/', name: 'root', component: LoginComponent, beforeEnter: (to, from, next) => {
            if(localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'home', params: {currentuser: user}});
            } else {
                next();
            }
        }},
        
        {path: '/users', name: 'users', component: AllUsers},
        {path: '/home', name: 'home', component: HomeComponent, props: true},
        {path: '/audios', name: 'audios', component: AudioComponent, props: true},
        {path: '/allmovies', name: 'allmovies', component: MovieThumbnail},
        {path: '/tv', name: 'tv', component: TVComponent, props: true},
        
    ]
});

(() => {
    const vm = new Vue({
        data: {
           authenticated: false,
           isAdmin: false,
           currentUser: undefined
        },
        
        created: function() {
            
        },
        methods: {
            logout(){
                if (localStorage.getItem('cacheduser')) {
                    localStorage.removeItem('cacheduser');
                }
                this.$router.push({name: "root"});
                this.currentUser = undefined;
            },
            authenticateuser(user) {
                this.currentUser = user;
                
            },
            gotouser(){
               
                this.$router.push({name: "users"});
                this.currentUser = undefined;
                
            }
            
        },
        components: {
            //moviethumb: TheMovieThumbnail
        },
        router
    }).$mount("#app");
})();