<template>
  <div class="home">
    <div id="read">
    </div>
  </div>
</template>
<script>
import Epub from 'epubjs'
global.epub = Epub

export default {
  name: 'home',
  mounted () {
    this.book = new Epub('/java8.epub')
    console.log(this.book)
    console.log(15, Epub)
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
  }
}
</script>
<style scoped>
  .icon-brightness{
    color:red;
    font-size: 24px;
  }
</style>
