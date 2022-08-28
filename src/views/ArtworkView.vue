<template>
<div class="artwork-container">
    <Header />
    <Artwork />
    <!-- <Card /> -->
</div>

</template>

<script>
import Header from '../components/Header.vue'
import Artwork from '../components/Artwork.vue'
import Card from '../components/Card.vue'



export default {
    components: {
        Header,
        Artwork,
        Card
    },
}

</script>