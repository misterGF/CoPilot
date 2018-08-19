<template>
  <footer class="main-footer">
    <strong>Copyright &copy; {{ year }}
    <a href="javascript:;">CoPilot</a>.</strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
