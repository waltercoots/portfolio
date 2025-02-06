<script>
export default {
  name: "ContactView",
  components: {
  },
};
</script>

<template>
  <div class="contact">
    <div class="contactContent">
      <ul class="contactMethods">
        <li><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;">&#69;&#109;&#97;&#105;&#108;</a></li>
        <li><a href="&#115;&#109;&#115;&#58;&#43;&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#84;&#101;&#120;&#116;</a></li>
        <li><a href="&#116;&#101;&#108;&#58;&#43;&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#67;&#97;&#108;&#108;</a></li>
        <li><a href="https://www.linkedin.com/in/waltercoots" target="_blank">LinkedIn</a></li>
        <li><a href="https://bsky.app/profile/waltercoots.bsky.social">BlueSky</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  div.contactContent {
    ul.contactMethods {
      display:flex;
      justify-content: center;
      list-style: none;
        a {
          margin:0.5rem;
        }
    }
  }
</style>