<template>
    <div>
        <div id="read">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'
import { setInterval } from 'timers';
global.ePub = Epub
export default {
    methods: {
        prevPage() {
            if(this.rendition) this.rendition.prev()
        },
        nextPage() {
            if(this.rendition) this.rendition.next()
        },
        toggleTitle() {
            console.log('哈哈哈toggleShow Title')
        },
        initBook() {
            const BASE_URL = 'http://localhost:8890/epub/'
            const url = BASE_URL + this.fileName + '.epub'
            this.book = new Epub(url)
            console.log(20, this.book)
            this.rendition = this.book.renderTo('read',{
                width: window.innerWidth,
                height: window.innerHeight,
                methods: 'default'
            })
             this.rendition.display()
            // 电子书的具体内容是内嵌到iframe中
            this.rendition.on('touchstart', () => {
                console.log('29touchstart',event)
                this.touchStartX = event.changedTouches[0].clientX;
                this.timeStart = event.timeStamp
            })
            this.rendition.on('touchend', () => {
                console.log('32touchend',event)
                const offsetX = event.changedTouches[0].clientX - this.touchStartX;
                const offsetTime = event.timeStamp - this.timeStart;
                console.log(offsetX,offsetTime)
                if(offsetTime < 500 && offsetX > 50) {
                    this.prevPage()
                }else if(offsetTime <500 && offsetX < -50) {
                    this.nextPage()
                }else{
                    this.toggleTitle()
                }
                // event.preventDefault()
                // event.stopPropagation()
            })
        }
    },
    computed: {
        ...mapGetters(['fileName'])
    },
    mounted() {
        const fileName = this.$route.params.fileName.split('|').join('/')
        this.$store.dispatch('setFileName', fileName).then(() => {
            this.initBook()
        })
    },
}
</script>

<style lang="scss" scoped>

</style>
