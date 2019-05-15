<template>
 <div
    :class="{
    hidden: hidden
  }"
  :style="{
    'width': `${percent}%`
  }"/>
</template>


<script>
export default {
  data() {
    return {
      hidden: true,
      percent: 0
    }
  },
  methods: {
    start() {
      this.hidden = false
      this.percent = 0          
      this.timer = setInterval(() => {
        this.percent++}, 100)
    },
    finish() {
      this.hidden = true
      this.percent = 100
      clearInterval(this.timer)
    }
  }
}
</script>
