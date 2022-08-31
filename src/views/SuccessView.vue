<template>
<div class="success-container">
<Header />
<div>
    <h1>Purchase Successful</h1>
    <p>Thanks!</p>

</div>


</div>

</template>


<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>



<style scoped>
h1 {
    text-align: center;
    font-family: Noto Sans;
    font-size: 2rem;
    color: navy;
}

p {
    font-size: 1.2rem;
    text-align: center;
}
</style>