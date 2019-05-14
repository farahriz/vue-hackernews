<template>
  <li>
    {{item.url}}
    {{item.score}}
  </li>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
