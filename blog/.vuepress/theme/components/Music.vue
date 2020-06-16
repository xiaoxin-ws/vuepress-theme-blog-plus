<template>
  <div>
    <div>
      <div id="music">
        <div
          name="meting"
          :server="$themeConfig.music.server"
          :type="$themeConfig.music.type"
          :id="$themeConfig.music.id"
          :mutex="$themeConfig.music.mutex"
          :preload="$themeConfig.music.preload"
          :order="$themeConfig.music.order"
          :fixed="$themeConfig.music.fixed"
          :autoplay="$themeConfig.music.autoplay"
          :loop="$themeConfig.music.loop"
          :volume="$themeConfig.music.volume"
        ></div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css"
      />

      <!-- <script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script> -->
      <script src="/lib/APlayer/Meting.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style>
</style>