<template>
  <li class="dropdown notifications-menu">
    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-bell-o"></i>
      <span class="label label-warning">{{ userInfo.notifications | count }}</span>
    </a>
    <ul class="dropdown-menu">
      <li class="header">You have {{ userInfo.notifications | count }} notification(s)</li>
      <li v-if="userInfo.notifications.length > 0">
        <!-- Inner Menu: contains the notifications -->
        <ul class="menu">
          <li>
            <!-- start notification -->
            <a href="javascript:;">
              <i class="fa fa-users text-aqua"></i> 5 new members joined today
            </a>
          </li>
          <!-- end notification -->
        </ul>
      </li>
      <li class="footer" v-if="userInfo.notifications.length > 0">
        <a href="javascript:;">View all</a>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NotificationsMenu',
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
