<template>
  <div id="youtube" class="py-8 secondary">
    <h2 class="text-center text--primary">YOUTUBE</h2>
    <p class="text-center">
      Latest YouTube Tutorials, I create YouTube tutorials to give back to the
      community
    </p>
    <v-container>
      <v-row>
        <v-col
          v-for="(video, key) in videos"
          :key="key"
          class="d-flex child-flex"
          cols="12"
          xs="12"
          sm="6"
          md="4"
        >
          <!-- <v-responsive max-height="315px" max-width="100%"> -->
          <iframe
            width="100%"
            height="auto"
            :src="`https://www.youtube.com/embed/${video}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <!-- </v-responsive> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
    }
  },
  async mounted() {
    const channelData = await this.$axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCqOeeqoRUCEinRCYVRI4yTQ&key=${this.$config.apiSecret}`
    )
    const uploadId =
      channelData.data.items[0].contentDetails.relatedPlaylists.uploads
    const playlistData = await this.$axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadId}&key=${this.$config.apiSecret}`
    )
    const playlistItems = playlistData.data.items
    // const videos = []
    playlistItems.forEach((item) => {
      this.videos.push(item.snippet.resourceId.videoId)
    })
    // console.log(videos)
    // return { videos }
  },
}
</script>
