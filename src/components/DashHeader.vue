<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/"><img src="/static/img/copilot-logo-white.svg" alt="Logo" class="img-responsive center-block logo"></a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages-->
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
          <!-- /.messages-menu -->

          <!-- Notifications Menu -->
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

          <!-- Tasks Menu -->
          <li class="dropdown tasks-menu">
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">{{ userInfo.tasks | count }} </span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ userInfo.tasks | count }} task(s)</li>
              <li v-if="userInfo.tasks.length > 0">
                <!-- Inner menu: contains the tasks -->
                <ul class="menu">
                  <li>
                    <!-- Task item -->
                    <a href="javascript:;">
                      <!-- Task title and progress text -->
                      <h3>
                        Design some buttons
                        <small class="pull-right">20%</small>
                      </h3>
                      <!-- The progress bar -->
                      <div class="progress xs">
                        <!-- Change the css width attribute to simulate progress -->
                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer" v-if="userInfo.tasks.length > 0">
                <a href="javascript:;">View all tasks</a>
              </li>
            </ul>
          </li>

          <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
              <!-- The user image in the navbar-->
              <img :src="avatar" class="user-image" alt="User Image">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs">{{ displayName }}</span>
            </a>
            <!-- Account Info and Menu -->
            <ul class="dropdown-menu">
              <li class="user-header" style="height:auto;min-height:85px;padding-bottom:15px;">
                <p>
                  <span>{{ displayName }}</span>
                  <small v-for="role in roles" :key="role">{{ role }}</small>
                </p>
              </li>
              <li class="user-footer">
                <a href="javascript:;" class="btn btn-default btn-flat btn-block">
                  <i class="fa fa-sign-out"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['avatar', 'displayName', 'roles'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>

<style <style lang="scss" scoped>
.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4,
.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > p {
  margin-left: 0;
}
</style>

