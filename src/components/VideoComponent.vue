<template>
  <div class="video-container">
    <!-- Embedded YouTube video -->
    <iframe :src="youtubeVideoUrl" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup>
// Define the YouTube video ID
const youtubeVideoId = "YOUR_YOUTUBE_VIDEO_ID";

// Computed property to generate the YouTube video URL
const youtubeVideoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  max-width: 560px; /* Set the maximum width of the container */
  margin: 0 auto; /* Center the container */
}

/* Make the embedded video responsive */
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
