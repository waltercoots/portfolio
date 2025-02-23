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
      <div class="e">
        <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;">&#69;&#109;&#97;&#105;&#108;</a>
      </div>
      <div class="p">
        <a href="&#115;&#109;&#115;&#58;&#43;&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#84;&#101;&#120;&#116;</a>
        <a href="&#116;&#101;&#108;&#58;&#43;&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#67;&#97;&#108;&#108;</a>
      </div>
      <div class="s">
        <a href="https://www.linkedin.com/in/waltercoots/" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.contact {
  height:100%;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  div.contactContent {
    background:url('/public/img/contact-full.jpg') center center / cover no-repeat;
    background-blend-mode: multiply;
    mix-blend-mode: multiply;


    @include xs {
      width:22rem;
      min-width:22rem;
      height:17.625rem;
    }
    @include sm {
      width:45.625rem;
      min-width:45.625rem;
      height:36.625rem;
    }


    position:relative;
    div a {
      display:block;
      position:absolute;
      text-indent:-999em;
      overflow:hidden;
      @media (hover:hover) {
        &:hover {
          background:$accent;
          mix-blend-mode: screen;
        }         
      }
    }
    div.p {
      a {
        aspect-ratio: 1/1;
        width:6.5%;
      }
      a:nth-child(1) {
        top:44%;
        left:24.5%;
      }
      a:nth-child(2) {
        top:44%;
        right:26.5%;
      }
    }
    div.e {
      a {
        width:61.25%;
        height:8.2%;
        top:52%;
        left:19%;
      }
    }
    div.s {
      a {
        aspect-ratio: 1/1;
        width:15%;
        top:43.25%;
        right:4.125%;
        @media (hover:hover) {
          &:hover {
            background:#0a66c2;
          }
        }
      }
    }
  }
}

</style>