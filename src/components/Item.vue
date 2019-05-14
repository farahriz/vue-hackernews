<template>
  <li>
    <a :href="item.url"> {{item.title}} </a>
    {{item.score}}
    Written by {{item.by}}
  </li>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
