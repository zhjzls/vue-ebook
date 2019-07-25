<template>
  <div class="home">
    <span class="icon-bookmark"></span>
    <span class="text">abcdefg</span>
    <span class="text">ABCDEFG</span>
    <div id="read">
    </div>
  </div>
</template>
<script>
import Epub from 'epubjs'
global.epub = Epub
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  html.style.fontSize = fontSize + 'px'
})
export default {
  name: 'home',
  mounted () {
    // this.book = new Epub('/java8.epub')
    // console.log(this.book)
    // console.log(15, Epub)
    // this.book.renderTo('read', {
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // }).display()
    this.$store.dispatch('setTest', 12).then(() => {
      console.log('异步处理结束', this.$store.state.test)
    })
  }
}
</script>
<style lang='scss' scoped>
@import './assets/styles/global.scss';
  .icon-brightness{
    color:red;
    font-size: 1rem;
  }
  .text{
    font-family: 'Days One';
    font-size: px2rem(20);
    color: orange;
  }
</style>
