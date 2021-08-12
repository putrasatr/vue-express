const data = {
    kata: "click Me",
    posts: [],
    movies: []
}

const app = new Vue({
    el: "#app",
    data,
    methods: {
        async getPosts() {
            const { data: { data } } = await axios.get(`http://localhost:3005/api/`)
            this.posts = data[0]
        },
        async getMovies() {
            const { data: { data } } = await axios.get(`http://localhost:3005/api/movies`)
            this.movies = data
        }
    },
    computed: {
        displayedPosts() {
            return this.posts
        },
        displayMovies() {
            return this.movies
        }
    },
    created() {
        this.getMovies()
    }
})