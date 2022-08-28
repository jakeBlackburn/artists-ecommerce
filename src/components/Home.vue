<template>
    <div class="home-container">
        <p v-if="this.isLoading">loading...</p>
        <Featured /> 
        <Grid :artworks="this.artworks" :isLoading="this.isLoading"/>
    </div>
</template>


<script>
import Grid from './Grid.vue'
import Featured from './Featured.vue'
import axios from 'axios'

export default {
    name: 'home',
    components: {
        Grid,
        Featured,
    },
    data() {
        return {
            artworks: [],
            isLoading: false
        }
    },
     async created() {
        this.isLoading = true
        try {
            const artworks = await axios.get('http://localhost:3000/api/v1/artworks')
            this.artworks = artworks.data.artworks
        } catch (err) {
            console.log(err)
        }
        this.isLoading = false

    }
}

</script>

<style scoped>

</style>