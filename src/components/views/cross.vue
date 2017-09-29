<template>
  <div class="cross"></div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'reader',
  components: {
  },
  data () {
    return {
      element: null,
      stack: null
    }
  },
  props: {
    imageIds: {
      type: Array,
      require: true
    }
  },
  mounted () {
    console.log(1111)
    this.element = this.$el
    cornerstone.enable(this.element)
    $(window).resize(e => {
      cornerstone.resize(this.element, true)
    })
    $(this.element).on('CornerstoneNewImage', (e) => {  // 视图更新后提交给store
      // cornerstone.resize(this.element, true)
    })
    this.initData(this.imageIds)
  },
  watch: {
    imageIds (arr) {
      this.initData(arr)
    }
  },
  methods: {
    initData (imageIds) {
      if (!imageIds || !imageIds.length) return
      this.stack = {
        currentImageIdIndex: 0,
        imageIds
      }
      this.displayImage()
    },
    displayImage () {
      $(window).resize()
      cornerstone.loadImage(this.stack.imageIds[this.stack.currentImageIdIndex]).then(image => {
        cornerstone.displayImage(this.element, image)
        // Set the stack as tool state
        cornerstoneTools.addStackStateManager(this.element, ['stack'])
        cornerstoneTools.addToolState(this.element, 'stack', this.stack)
        // Enable all tools we want to use with this element
        cornerstoneTools.stackScroll.activate(this.element, 1)
        cornerstoneTools.stackScrollWheel.activate(this.element)
        // cornerstoneTools.scrollIndicator.enable(this.element)
        cornerstoneTools.mouseInput.enable(this.element)
        cornerstoneTools.mouseWheelInput.enable(this.element)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cross{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
</style>
