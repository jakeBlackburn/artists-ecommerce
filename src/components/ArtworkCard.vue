<template>
<div class="card-container">
    <img :src="this.image_url" :alt="artwork.name">
    <h4 class="title">{{this.name}}</h4>
    <div class="content">
        <p class="selling-type"><em>{{artwork.auction ? 'auction' : 'fixed price'}}</em></p>
        <p class="price" v-if="artwork.price">Price: {{artwork.price}}</p>
        <p class="price" v-if="artwork.highestBid">Highest Bid: {{artwork.highestBid}}</p>
    </div>
</div>

</template>


<script>

export default {
    props: {
        artwork: Object
    },
    data() {
        return {
            image_url: `http://localhost:3000/images/${this.artwork.image}`,
            name: this.artwork.name.replace(/-/g, " ")
        }
    }
}
</script>


<style scoped>
.card-container {
    border: 2px solid rosybrown;
    padding: 30px;
    background-color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
}

.title {
    font-family: Noto Sans;
    font-size: 1.3rem;
    text-align: center;
}


.content {
    width: 80%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
}

.selling-type {
    font-size: 1.1rem;
    color: slateblue;
}

.price {
    color: darkmagenta;
}


</style>