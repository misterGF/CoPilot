<template>
  <li class="dropdown notifications-menu">
    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-bell-o"></i>
      <span class="label label-warning">{{ newNotifications | count }}</span>
    </a>
    <ul class="dropdown-menu">
      <li class="header">
        <div class="row no-margin">
          <span class="col-xs-12 col-md-6 tab-link" :class="{active: tab === 'new'}" @click="switchTab($event, 'new')">
              <a href="javascript:;">New</a>
            </span>
          <span class="col-xs-12 col-md-6 tab-link" :class="{active: tab === 'old'}" @click="switchTab($event, 'old')">
              <a href="javascript:;">Old</a>
            </span>
        </div>
      </li>
      <li>
        <ul v-if="tab === 'new'" class="menu">
          <notification-item v-for="notification in newNotifications" :key="notification.id" :notification="notification"></notification-item>
          <li v-if="!newNotifications.length">
            <span class="center-block text-center">There are no new notifications</span>
          </li>
        </ul>
        <ul v-if="tab === 'old'" class="menu">
          <notification-item v-for="notification in oldNotifications" :key="notification.id" :notification="notification"></notification-item>
          <li v-if="!oldNotifications.length">
            <span class="center-block text-center">There are no old notifications</span>
          </li>
        </ul>
      </li>
      <li v-if="newNotifications.length && tab === 'new'" class="footer">
        <a href="javascript:;" @click="markAllAsRead">
          <i class="fa fa-check"></i>
          <span>Mark all as read</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import NotificationItem from './NotificationItem'

export default {
  name: 'NotificationsMenu',
  components: {
    NotificationItem
  },
  data() {
    return {
      tab: 'new'
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ]),
    newNotifications() {
      return this.userInfo.notifications.filter(n => !n.readAt)
    },
    oldNotifications() {
      return this.userInfo.notifications.filter(n => n.readAt)
    }
  },
  methods: {
    markAllAsRead() {
      event.stopPropagation()

      this.userInfo.notifications.filter(n => !n.readAt).forEach(function(notification) {
        notification.readAt = new Date().toUTCString
      })
    },
    switchTab(event, tab) {
      event.stopPropagation()

      this.tab = tab
    }
  }
}
</script>

<style scoped>
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu {
  width: 400px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li.header {
  padding: 0;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li.header span.tab-link {
  padding: 4px;
  text-align: center;
  cursor: pointer;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li.header span.tab-link a {
  color: #444;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li.header span.tab-link.active {
  font-weight: bold;
  border-bottom: 2px solid #3c8dbc;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li.header span:hover.tab-link > a {
  color: #3c8dbc !important;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li > ul.menu {
  max-height: 300px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li > ul.menu li > span {
  padding: 10px;
}
.navbar-custom-menu > .navbar-nav > li.notifications-menu > .dropdown-menu li:hover.footer > a {
  color: #3c8dbc !important;
}
</style>
