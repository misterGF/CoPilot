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

<style scoped>
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4, .navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > p {
  margin: 0;
  white-space: normal;
  word-break: break-word;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 {
  font-size: 15px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 small {
  font-size: 10px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > p {
  font-size: 12px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 > span {
  display: inline-block;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu > li > ul.menu li > a > h4 > small.time {
  margin-top: 3px;
}
</style>
