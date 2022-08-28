<template>
    <div class="cart-container">
        <div class="header">
            <h3 class="title">Shopping Cart</h3>
            <p>user: {{this.$store.state.user}}</p>
        </div>
        <div class="empty" v-if="this.$store.state.shoppingCart.length === 0">cart empty</div>
        <div class="cart-item" v-for="item in this.$store.state.shoppingCart" :key="item._id">
            <div class="item-content">
                <h4 class="item-name">{{item.name.replace(/-/g, " ")}}</h4>
                <img src="../assets/remove-button.png" alt="remove from cart" class="delete" @click="remove(item._id)">
            </div>
            <p class="price">$ {{item.price}}</p>
        </div>
        <button v-if="!(this.$store.state.shoppingCart.length === 0)" @click="checkout()">Proceed to Checkout</button>
        
        
    </div>
</template>

<script>


export default {
    methods: {
        remove(id) {
            this.$store.commit('removeFromCart', id)
        },
        checkout() {
            alert('use (4242 4242 4242 4242, 04/24, 424) for credit card info')
            let itemsArray = []
            for (let i = 0; i < this.$store.state.shoppingCart.length; i++) {
                itemsArray.push({ id: this.$store.state.shoppingCart[i].item_id, quantity: 1 })
            }
            fetch("http://localhost:3000/create-checkout-session", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                items: itemsArray,
                }),
            })
            .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
            window.location = url
            })
            .catch(e => {
            console.error(e.error)
            })
            },

            }
        }

</script>


<style scoped>
.cart-container {
    position: fixed;
    top: 70px;
    right: 10px;
    width: 350px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

.empty {
    text-align: center;
    font-size: 0.9rem;
    color: navy;
    padding: 20px;
}

.title {
    text-align: center;
    margin: 10px;
    font-family: Noto Sans;
    text-decoration: underline;
    color: navy;
}

.cart-item {
    border-top: 1px solid slateblue;
    margin: 0 20px
}

.item-name {
    margin: 0;
    font-family: Noto Sans;
}

.item-content {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
}

img {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

p {
    margin: 0;
    color: deeppink;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0.8rem;
}

button {
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    background-color: rgb(250, 226, 229);
    margin: 20px 50px;
    font-family: Noto Sans;
}
</style>