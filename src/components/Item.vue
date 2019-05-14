
<template>
  <li class="item">
    <span class="score">{{ item.score }}</span>
    <span class="title">
      <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
      <span class="host"> ({{ item.url }})</span>
    </span>
    <br>
    <span class="meta">
      <span class="by">
        by {{ item.by }}
      </span>
    </span>
  </li>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
