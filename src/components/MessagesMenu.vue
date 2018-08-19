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
          <li>
            <!-- start message -->
            <a href="javascript:;">
              <!-- Message title and timestamp -->
              <h4>
                Support Team
                <small>
                  <i class="fa fa-clock-o"></i> 5 mins</small>
              </h4>
              <!-- The message -->
              <p>Why not consider this a test message?</p>
            </a>
          </li>
          <!-- end message -->
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

export default {
  name: 'MessagesMenu',
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
