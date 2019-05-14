<template>
  <li>
    {{item.url}}
    {{item.score}}
    Written by {{item.by}}
  </li>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
