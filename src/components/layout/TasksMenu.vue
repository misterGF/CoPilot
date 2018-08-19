<template>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TasksMenu',
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
