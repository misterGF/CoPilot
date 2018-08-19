<template>
  <li class="notification-item">
    <a href="javascript:;">
      <h4>
        <span>{{ notification.title }}</span>
        <small class="time pull-right">
          <i class="fa fa-clock-o"></i>
          <span>{{ notification.createdAt }}</span>
        </small>
      </h4>
      <p>{{ notification.body }}</p>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu {
  li > a > h4,
  li > a > p {
    margin: 0;
    white-space: normal;
    word-break: break-word;
  }

  li > a > h4 {
    font-size: 15px;

    small {
      font-size: 10px;
    }
  }

  li > a > p {
    font-size: 12px;
  }

  li > a > h4 > span {
    display: inline-block;
  }

  li > a > h4 > small.time {
    margin-top: 3px;
  }
}
</style>
