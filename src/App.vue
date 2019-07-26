<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
    // console.log(28, this.$store)
    // console.log(31, this.test)
    // this.$store.dispatch('setTest', 12).then(() => {
    //   console.log('异步处理结束', this.$store.state.book.test)
    // })
  },
  computed: {
    ...mapGetters(['test'])
  }
}
</script>
<style lang='scss'>
@import './assets/styles/global.scss';
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
