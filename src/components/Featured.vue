<template>
<div class="featured-container">
    <p v-if="this.isLoading">loading...</p>
    <div class="artist"><em>featured artist</em> - {{this.name}}</div>
    <div class="content">
        <img v-if="!this.isLoading" :src="image_url" :alt="this.artist.name">
        <p class="bio">{{artist.bio}}</p>
        <router-link class="link" :to="artist_url">to artist page</router-link>
    </div>
</div>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            artist: {},
            name: '',
            image_url: '',
            artist_url: '',
            isLoading: false
        }
    },
    async created() {
        try {
            this.isLoading = true
            const artists = await axios.get('http://localhost:3000/api/v1/artists')
            const length = artists.data.artists.length
            const randIndex = Math.floor(Math.random() * length)
            this.artist = artists.data.artists[randIndex]
            this.image_url = `http://localhost:3000/images/${this.artist.image}`
            this.artist_url = `/artist/${this.artist.name}`
            this.name = this.artist.name.replace(/-/g, " ")
            this.isLoading = false
        } catch (err) {
            console.log(err);
        }
    }
}

</script>

<style scoped>
.featured-container {
    padding: 30px 50px;
    background-color: aliceblue;
    border-top: 1px solid black;
    position: relative;
    height: 200px;
}

.artist {
    font-family: Noto Sans;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    width: 90%;
    position: absolute;
    top: 20px;
}

img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    object-fit: cover;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.bio {
    width: 60%;
    padding-top: 20px;
}

.link {
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