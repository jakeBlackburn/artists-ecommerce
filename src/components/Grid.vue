<template>
    <div class="grid-container" >
        <div class="grid-header">
            <h2>Artworks</h2>
        </div>
        <p v-if="isLoading">loading...</p>
        <div class="grid">
            <ArtworkCard class="artwork" v-for="artwork in this.artworks" :key="artwork.id" :artwork="artwork" @click="navigate(artwork)" />
        </div>
    </div>
</template>



<script>
import ArtworkCard from './ArtworkCard.vue'

export default {
    props: {
        artworks: Array,
        isLoading: Boolean
    },
    components: {
        ArtworkCard
    },
    methods: {
        navigate(artwork) {
            this.$router.push(`/artwork/${artwork.name}`)
        }
    },
   
}

</script>

<style scoped>
.grid-container {
    padding: 0 20px 50px;
    border-top: 1px solid black;
}

.grid-header {
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5rem;
}

.grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}

.artwork {
    cursor: pointer;
}
</style>