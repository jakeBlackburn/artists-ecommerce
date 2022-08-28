<template>
    <div ref="card"></div>
    <button v-on:click="purchase">Purchase</button>
</template>

<script>
let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
    elements = stripe.elements(),
    card = undefined;

export default {
    mounted() {
        card = elements.create('card')
        card.mount(this.$refs.card)
    },
    data() {
        return {
            hasCardErrors: false
        }
    },
    methods: {
        purchase() {
            stripe.createToken(card).then(function(result) {
                if (result.error) {
                this.hasCardErrors = true;
                this.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                return;
    }
            });
        }
    }
}
</script>