<template>
  <div>
    <button @click="startOauthFlow">Login</button>
  </div>
</template>

<script>
import { stringify } from 'querystring'
import axios from 'axios'

export default {
  data() {
    return {
      user: null,
      authURL: ''
    }
  },

  mounted() {
    if (!this.user) {
      const base = 'https://accounts.spotify.com/authorize'
      const urlParams = stringify({
        client_id: '0901c43971624c42989d6aa92cb5e2e2',
        response_type: 'token',
        scope: 'user-top-read',
        redirect_uri: 'http://localhost:3000/callback'
      })
      this.authURL = `${base}?${urlParams}`
    }
  },

  methods: {
    startOauthFlow: function() {
      window.location = this.authURL
    }
  }
}
</script>
