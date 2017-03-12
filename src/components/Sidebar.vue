<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">

        </div>
        <div class="pull-left info">
          <div><p class="white">{{ displayName }}</p></div>
          <a href="javascript:;"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form v-on:submit.prevent class="sidebar-form">
        <div class="input-group">
          <input type="text" name="search" id="search" class="search form-control" data-toggle="hideseek" placeholder="Search Menus" data-list=".sidebar-menu">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="header">TOOLS</li>
        <li class="active pageLink" v-on:click="toggleMenu">
          <router-link to="/"><i class="fa fa-desktop"></i>
            <span class="page">Dashboard</span>
          </router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/tables"><i class="fa fa-table"></i>
            <span class="page">Tables</span>
          </router-link>
        </li>

        <li class="header">ME</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/tasks">
            <i class="fa fa-tasks"></i>
            <span class="page">Tasks</span>
          </router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/setting">
            <i class="fa fa-cog"></i>
            <span class="page">Settings</span>
          </router-link>
        </li>

        <li class="header">LOGS</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/access"><i class="fa fa-book"></i>
            <span class="page">Access</span>
          </router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/server"><i class="fa fa-hdd-o"></i>
            <span class="page">Server</span>
          </router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/repos"><i class="fa fa-heart"></i>
            <span class="page">Repos</span>
            <small class="label pull-right bg-green">AJAX</small>
          </router-link>
        </li>

        <li class="header">PAGES</li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/login">
            <i class="fa fa-circle-o text-yellow"></i>
            <span class="page"> Login</span>
          </router-link>
        </li>
        <li class="pageLink" v-on:click="toggleMenu">
          <router-link to="/404"><i class="fa fa-circle-o text-red"></i>
            <span class="page"> 404</span>
          </router-link>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  name: 'Sidebar',
  props: ['displayName'],
  methods: {
    toggleMenu (event) {
      // remove active from li
      var active = document.querySelector('li.pageLink.active')

      if (active) {
        active.classList.remove('active')
      }
      // window.$('li.pageLink.active').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}
</script>
