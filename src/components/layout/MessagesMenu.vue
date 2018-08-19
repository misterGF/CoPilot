<template>
  <li class="dropdown messages-menu">
    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-envelope-o"></i>
      <span class="label label-success">{{ userInfo.messages | count }}</span>
    </a>
    <ul class="dropdown-menu">
      <li class="header">You have {{ userInfo.messages | count }} message(s)</li>
      <li v-if="userInfo.messages.length > 0">
        <!-- inner menu: contains the messages -->
        <ul class="menu">
          <message-item v-for="message in userInfo.messages"
              :key="message.id"
              :message="message"></message-item>
        </ul>
        <!-- /.menu -->
      </li>
      <li class="footer" v-if="userInfo.messages.length > 0">
        <a href="javascript:;">See All Messages</a>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import MessageItem from './MessageItem'

export default {
  name: 'MessagesMenu',
  components: {
    MessageItem
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
