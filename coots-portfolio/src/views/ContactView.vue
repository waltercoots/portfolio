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
        <span>&#119;&#97;&#108;&#116;&#101;&#114;&#64;&#119;&#97;&#108;&#116;&#101;&#114;&#99;&#111;&#111;&#116;&#115;&#46;&#99;&#111;&#109;</span>
      </div>
      <div class="p">
        <a href="&#115;&#109;&#115;&#58;&#43;&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#84;&#101;&#120;&#116;</a>
        <a href="&#116;&#101;&#108;&#58;&#43;&#49;&#53;&#49;&#50;&#57;&#54;&#53;&#55;&#53;&#54;&#55;">&#67;&#97;&#108;&#108;</a>
        <span>&#40;&#53;&#49;&#50;&#41;&#32;&#57;&#54;&#53;&#45;&#55;&#53;&#54;&#55;</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.contact {
  height:100%;
  width:100%;
  div.contactContent {
    display:flex;
    box-sizing: border-box;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    div.e, div.p {
      padding:0.5rem 0.665rem;
      border: 1px solid $black;
      &:last-child{
        border-left:0;
      }
      span {
        font-size:1.304375rem;
      }
    }
    div.e a, div.p a {
      display:inline-block;
      position:relative;
      color:$black;
      text-indent:-999em;
      width:1.5rem;
      height:1.5rem;
      margin-right:1rem;
      &:before {
        content: '';
        display:inline-block;
        position:absolute;
        top:0;
        left:0;
        width:1.5rem;
        height:1.5rem;
      }
      &:focus {
        &:before {
          border-bottom:1px solid $black;
        }
      }
    }
    div.e {
      a {
        &:before {
          background:url('~@/assets/mail.svg') no-repeat center;
        }
      }
    }
    div.p {
      a:first-child {
        &:before {
          background:url('~@/assets/call.svg') no-repeat center;
        }
      }
      a:nth-child(2) {
        &:before {
          background:url('~@/assets/text.svg') no-repeat center;
        }
      }
    }
  }
}
</style>