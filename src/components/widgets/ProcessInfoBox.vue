<template>
  <div :class="['info-box', colorClass]">
    <span class="info-box-icon">
      <i :class="iconClasses"></i>
    </span>
    <div class="info-box-content">
      <span class="info-box-text">{{text}}</span>
      <span class="info-box-number">{{number}}</span>
      <div class="progress">
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
      </div>
      <span class="progress-description">{{description}}</span>
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
    progress: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 100
      }
    },
    description: {
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
