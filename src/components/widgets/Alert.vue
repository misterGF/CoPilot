<template>
  <div :class="['alert', 'alert-' + type, {'alert-dismissible': dismissible}]">
    <button v-if="dismissible" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <h4>
      <i :class="['icon', iconClasses]"></i>
      <span>{{title}}</span>
    </h4>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    dismissible: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'info'
    },
    iconClasses: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
