<template>
<div class="failure">
    <Header />
    <div>
        <h1>Purchase Failed</h1>
        <p>Please use the testing card info: 4242 4242 4242 4242, 04/24, 424 <br> This is a demo </p>
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