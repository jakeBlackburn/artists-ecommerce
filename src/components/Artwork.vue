<template>
<div class="artwork-container">
<p v-if="this.isLoading" class="loading">loading...</p>
<img v-if="!this.isLoading" :src="image_url" :alt="this.artwork.name">
<div class="content">
    <h1 class="title">{{this.name}}</h1>
    <h4 class="subtitle" v-if="!this.isLoading">By {{this.artist_name}}</h4>
    <p class="artwork">{{this.artwork.description}}</p>
    <div class="buttons" v-if="!this.isLoading">
        <p class="price"><em>{{artwork.auction ? 'auction' : 'fixed price'}}</em></p>
        <p class="price" v-if="artwork.price">Price: {{artwork.price}}</p>
        <p class="price" v-if="artwork.highestBid">Highest Bid: {{artwork.highestBid}}</p>
        <router-link class="link" :to="artist_url">to artist page</router-link>
        <button v-if="!this.artwork.auction" class="link" @click="purchase()">add to cart</button>
        <button v-if="this.artwork.auction" class="link" @click="bid()">make a bid</button>
    </div>
</div>
</div>

</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            artwork: {},
            image_url: '',
            artist_url: '',
            isLoading: false,
            artist_name: '',
            name: ''
        }
    },
    methods: {
        purchase() {
            this.$store.commit('addToCart', this.artwork)
            alert(`${this.name} added to cart!`)
        },
        bid() {
            let bid = prompt('Enter your bid:', `${this.artwork.highestBid}`)
            if (isNaN(bid)) {
                alert('bid must be a number (no extra characters)')
                return
            }
            console.log(bid)
            let number = parseInt(bid)
            let highestBid = parseInt(this.artwork.highestBid.replace(/,/g, ""))
            console.log(number <= highestBid)
            if (number <= highestBid) {
                console.log(number)
                alert('bid must be higher than current highest bid')
                return
            }
            alert('bid successful! (this is a mockup, the highest bid will not change)')
        }
    },

    async created() {
        try {
            this.isLoading = true
            const { data } = await axios.get(`http://localhost:3000/api/v1/artworks/${this.$route.params.name}`)
            this.artwork = data.artwork
            this.image_url = `http://localhost:3000/images/${this.artwork.image}`
            this.artist_url =  `/artist/${this.artwork.artist}`
            this.name = this.artwork.name.replace(/-/g, " ")
            this.artist_name = this.artwork.artist.replace(/-/g, " ")
            this.isLoading = false
        } catch {
            console.log(err)
        }
    }
}

</script>

<style scoped>
.loading {
    width: 100%;
    font-size: 2rem;
    font-family: Noto Sans;
    text-align: center;
    color: navy;
}

.artwork-container {
    display: flex;
    padding-bottom: 50px;
}

img {
    margin: 0 50px;
    height: 500px;
    max-width: 700px;
    object-fit: cover;
    border-radius: 5px;
}

.title {
    width: 100%;
    font-family: Noto Sans;
    font-size: 2.1;
    text-align: center;
}

.subtitle {
    text-align: center;
    font-size: 0.8rem;
}

.artwork {
    font-size: 1.3rem;
    padding: 0 30px;
    text-align: center;
}


.price {
    color: royalblue;
}

.buttons {
    display: flex;
    margin: 0 80px 0 50px;
    justify-content: space-around;
    align-items: center;
}

.link {
    cursor: pointer;
    font-family: Raleway;
    font-size: 1.1rem;
    padding: 5px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
    background-color: rgb(250, 226, 229);
}

.link:hover {
    background-color: lavender;
    color: navy;
}
</style>