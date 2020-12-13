<template>
  <div class="hello">
    <input type="text" placeholder="Your Mail" v-model="mail">
    <input type="text" placeholder="Password" v-model="password">
    <button @click="signin">Signin</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signin',
  data () {
    return {
      mail: '',
      password: '',
      token: ''
    }
  },
  methods: {
    signin: function () {
      // サーバへ送信するパラメータ
      const params = new URLSearchParams();
      params.append('mail', this.mail)
      params.append('password', this.password)
      axios.post('http://localhost:8000/signin', params)
      .then(response => {
        if (response.status != 200) {
          throw new Error('レスポンスエラー')
        }
      })
      .then(() => {
        this.$router.push({ path: "/welcome"})
      })
      .catch(() => {
        alert('Invalid mail or pass')
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
