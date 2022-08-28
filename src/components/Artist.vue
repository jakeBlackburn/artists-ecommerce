<template>
<div>
    <div class="artist-container">
        <p v-if="this.isLoading">loading...</p>
        <img v-if="!this.isLoading" :src="this.artist_url" :alt="this.artist.name">
        <div class="content">
            <h1 class="title">{{this.name}}</h1>
            <p>{{this.artist.bio}}</p>
        </div>
    </div>
    <Grid :artworks="this.artworks" :isLoading="this.isLoading" />
</div>



</template>


<script>
import Grid from '../components/Grid.vue'
import axios from 'axios'


export default {
    components: {
        Grid
    },
    data() {
        return {
            artist: {},
            artworks: [],
            artist_url: '',
            isLoading: false
        }
    },
    async created() {
        try {
            this.isLoading = true
            const { data } = await axios.get(`http://localhost:3000/api/v1/artists/profile/${this.$route.params.name}`)
            this.artist = data.artist
            this.artworks = data.artworks
            this.artist_url = `http://localhost:3000/images/${data.artist.image}`
            this.name = this.artist.name.replace(/-/g, " ")
            this.isLoading = false
        } catch (err) {
            console.log(err)
        }
    }


 }
</script>


<style scoped>
.artist-container {
    display: flex;
    padding:  0 20px 20px 20px;
    justify-content: space-around;
}

img {
    margin-right: 30px;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    object-fit: cover;
}

.content {
    width: 60%;
}

.title {
    width: 100%;
    font-family: Noto Sans;
    font-size: 2.1;
    text-align: center;
}

p {
    font-size: 1.3rem;
    padding: 20px;
}
</style>