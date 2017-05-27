<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <li class="pageLink">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </router-link>
    </li>
    <li class="pageLink">
      <router-link to="/tables"><i class="fa fa-table"></i>
        <span class="page">Tables</span>
      </router-link>
    </li>

    <li class="header">ME</li>
    <li class="pageLink">
      <router-link to="/tasks">
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </router-link>
    </li>
    <li class="pageLink">
      <router-link to="/setting">
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </router-link>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>Files</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">LOGS</li>
    <li class="pageLink">
      <router-link to="/access"><i class="fa fa-book"></i>
        <span class="page">Access</span>
      </router-link>
    </li>
    <li class="pageLink">
      <router-link to="/server"><i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </router-link>
    </li>
    <li class="pageLink">
      <router-link to="/repos"><i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </router-link>
    </li>

    <li class="header">PAGES</li>
    <li class="pageLink">
      <router-link to="/login">
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </router-link>
    </li>
    <li class="pageLink">
      <router-link to="/404"><i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SidebarName'
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
