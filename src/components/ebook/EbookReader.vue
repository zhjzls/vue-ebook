<template>
    <div>
        <div id="read">
        </div>
    </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import Epub from 'epubjs'
// import { setInterval } from 'timers'
global.ePub = Epub
export default {
    mixins: [ebookMixin],
    methods: {
        prevPage() {
            if (this.rendition) this.rendition.prev()
            this.hideMenu()
        },
        nextPage() {
            if (this.rendition) this.rendition.next()
            this.hideMenu()
        },
        toggleTitle() {
            if (this.menuVisible) {
                this.setSettingVisible(-1)
            }
            this.setMenuVisible(!this.menuVisible).then(() => {
                console.log('修改之后的值', this.menuVisible)
            })
        },
        hideMenu() {
            this.setMenuVisible(false)
            this.setSettingVisible(-1)
        },
        initBook() {
            const BASE_URL = process.env.VUE_APP_RES_URL
            const url = BASE_URL + 'epub/' + this.fileName + '.epub'
            this.book = new Epub(url)
            this.setCurrentBook(this.book)
            console.log(20, this.book)
            this.rendition = this.book.renderTo('read', {
                width: window.innerWidth,
                height: window.innerHeight,
                methods: 'default'
            })
             this.rendition.display()
            // 电子书的具体内容是内嵌到iframe中
            this.rendition.on('touchstart', () => {
                console.log('29touchstart', event)
                this.touchStartX = event.changedTouches[0].clientX
                this.timeStart = event.timeStamp
            })
            this.rendition.on('touchend', () => {
                console.log('32touchend', event)
                const offsetX = event.changedTouches[0].clientX - this.touchStartX
                const offsetTime = event.timeStamp - this.timeStart
                console.log(offsetX, offsetTime)
                if (offsetTime < 500 && offsetX > 50) {
                    this.prevPage()
                } else if (offsetTime < 500 && offsetX < -50) {
                    this.nextPage()
                } else {
                    this.toggleTitle()
                }
                // event.preventDefault()
                // event.stopPropagation()
            })
            this.rendition.hooks.content.register(contents => {
                contents.addStylesheet(BASE_URL + 'fonts/daysOne.css')
                contents.addStylesheet(BASE_URL + 'fonts/cabin.css')
                contents.addStylesheet(BASE_URL + 'fonts/montserrat.css')
                contents.addStylesheet(BASE_URL + 'fonts/tangerine.css')
            })
        }
    },
    mounted() {
        const fileName = this.$route.params.fileName.split('|').join('/')
        this.setFileName(fileName).then(() => {
            this.initBook()
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
