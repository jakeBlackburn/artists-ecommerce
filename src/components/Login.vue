<template>
    <div class="login-container">
        <form class="form contact-form" @submit.prevent="handleSubmit()">
            <h5>login</h5>
            <div class="form-row">
            <label for="username" class="form-label">username</label>
            <input type="text" class="form-input username-input" v-model="username" />
            </div>
            <div class="form-row">
            <label for="password" class="form-label">password</label>
            <input type="password" class="form-input password-input" v-model="password" />
            </div>
            <div class="form-alert" v-if="err.msg">{{err.msg}}</div>
            <button class="btn btn-block">submit</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'login form',
    data() {
        return {
            username: '',
            password: '',
            err: {}
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const { data } = await axios.post('http://localhost:3000/api/v1/login', {username: this.username, password: this.password})
                this.username = ''
                this.password = ''
                localStorage.setItem('token', data.token)
                this.$store.commit('setToken', data.token)
                const user = await axios.get('http://localhost:3000/api/v1/auth', {
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                    },
                })
                this.$store.commit('setUser', user.data.user)
                this.$store.commit('login')
            } catch (err) {
                console.log(err)
                this.username = ''
                this.password = ''
                this.err = err
                localStorage.removeItem('token')
            }
        }
    }
}

</script>


<style scoped>

.login-container {
  display: flex;
  justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 300px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px 35px;
}

h5 {
    color: navy;
    font-family: Noto Sans;
    text-align: center;
    font-size: 2.3rem;
    margin: 0 0 20px 0;
}

.form-row {
    padding: 10px;
    text-align: center;
}

label {
    font-size: 1.4rem;
    margin-right: 20px;
}

input {
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
}

input:focus {
    outline: none;
    background-color: rgb(250, 226, 229);
}


.btn {
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 40px;
    width: 100px;
    padding: 5px;
    background-color: rgb(250, 226, 229);
    border: 1px solid black;
    border-radius: 3px;
}

.btn:hover {
    color: navy;
    padding: 7px;
    margin-top: 38px;
    width: 104px;
    font-size: 1.6rem;

}

</style>