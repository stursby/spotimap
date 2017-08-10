<template>
  <div>
    <ul>
      <li v-for="artist in artists">
        <p>{{ artist.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      artists: []
    }
  },

  mounted() {
    const token = window.location.hash
      .split('=')[1]
      .split('&')[0]
    if (token) {
      axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        this.artists = res.data.items
      })
    }
  }
}
</script>
