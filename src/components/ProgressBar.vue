<template>
  <div
    :class="{hidden: hidden}"
    :style="{
    'width': '0%'
  }" />
</template>


<script>
export default {
  data() {
    return {
      hidden: true
    }
  },
  methods: {
    start() {
      this.hidden = false
    },
    finish() {}
  }
}
</script>
