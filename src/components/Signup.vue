<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="Your Mail" v-model="mail">
    <input type="text" placeholder="Password" v-model="password">
    <button @click="signUp">Signup</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data () {
    return {
      mail: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      // サーバへ送信するパラメータ
      const params = new URLSearchParams();
      params.append('mail', this.mail)
      params.append('password', this.password)
      axios.post('http://localhost:8000/signup', params)
      .then(response => {
        if (response.status != 200) {
          throw new Error('レスポンスエラー')
        }
      })
      .then(() => {
        this.$router.push({ path: '/user/signin'})
      })
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
