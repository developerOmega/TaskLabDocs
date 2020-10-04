<template>
  <pre class="code scroll-x scroll-style">
    {{ json }}
  </pre>
</template>

<script>
  export default {
    name: 'TargetJSON',
    props: {
      json: {
        type: String,
        default: ''
      }
    }
  }
</script>

