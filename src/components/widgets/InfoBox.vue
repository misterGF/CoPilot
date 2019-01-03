<template>
  <div class="info-box">
    <span :class="['info-box-icon', colorClass]">
      <i :class="iconClasses"></i>
    </span>
    <div class="info-box-content">
      <span class="info-box-text">{{text}}</span>
      <span class="info-box-number">{{number}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    text: {
      type: String,
      required: true
    },
    number: {
      type: String,
      default: ''
    },
    iconClasses: {
      type: Array,
      default: []
    },
    colorClass: {
      type: String,
      default: 'bg-default'
    }
  }
}
</script>
