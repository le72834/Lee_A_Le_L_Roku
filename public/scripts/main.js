import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';

const router = new VueRouter ({
    routes: [
        {path: '/', name: 'root', component: LoginComponent, beforeEnter: (to, from, next) => {
            if(localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'home', params: {current: user}});
            } else {
                next();
            }
        }},
        {path: '/users', name: 'users', component: AllUsers},
        {path: '/home', name: 'home', component: HomeComponent, props: true}
    ]
});

(()=> {
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
                if (localStorage.getItem('cacheuser')) {
                    localStorage.removeItem('cacheuser');
                }
                this.$router.push({name: "root"});
            },
            authenticateuser(user) {
                this.currentUser = user;
            }
        },
        components: {
            //moviethumb: TheMovieThumbnail
        },
        router
    }).$mount("#app");
})();