export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
    <section class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="rounded" @click="navToHome()">
            <div class="card-body text-center">
                <img :src="'images/' + liveuser.user_avatar" class="rounded-circle img-fluid">
                <p>{{ liveuser.user_name }}</p>
            </div>
        </div>
    </section>`,

    created: function() {
        // check if there's an avatar
        //this.liveuser.user_avatar = (this.liveuser.user_avatar) ? this.liveuser.user_avatar : "temp_avatar.jpg";
        if (this.liveuser.user_avatar == null) {
            this.liveuser.user_avatar = "temp_avatar.jpg";
        }
    },

    methods: {
        navToHome() {
        //    if(this.liveuser.user_avatar == 'hermione.jpg') {
        //     this.$router.push({name: "kids", params: { currentuser: this.liveuser}})
        //    }
            this.$router.push({name: "home", params: { currentuser: this.liveuser}})

            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
        }
    }
}