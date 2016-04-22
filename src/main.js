// Import System requirements
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'

// Import Views - Top level
import AppView from './components/App.vue'
import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/dash/Dashboard.vue'
import TablesView from './components/dash/Tables.vue'
import TasksView from './components/dash/Tasks.vue'
import SettingView from './components/dash/Setting.vue'
import AccessView from './components/dash/Access.vue'
import ServerView from './components/dash/Server.vue'
import ReposView from './components/dash/Repos.vue'

// Import Install and register helper items
Vue.use(Router)
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

// Routing logic
var router = new Router({
  history: true,
  saveScrollPosition: true
})

// Routes
router.map({
  '/login': {
    component: LoginView
  },
  '/': {
    component: DashView,
    auth: true,
    subRoutes: {
      '': {
        component: DashboardView,
        name: 'Dashboard',
        description: 'Overview of environment'
      },
      '/tables': {
        component: TablesView,
        name: 'Tables',
        description: 'Simple and advance table in CoPilot'
      },
      '/tasks': {
        component: TasksView,
        name: 'Tasks',
        description: 'Tasks page in the form of a timeline'
      },
      '/setting': {
        component: SettingView,
        name: 'Settings',
        description: 'User settings page'
      },
      '/access': {
        component: AccessView,
        name: 'Access',
        description: 'Example of using maps'
      },
      '/server': {
        component: ServerView,
        name: 'Servers',
        description: 'List of our servers'
      },
      '/repos': {
        component: ReposView,
        name: 'Repository',
        description: 'List of popular javascript repos'
      }
    }
  },
  // not found handler
  '*': {
    component: NotFoundView
  }
})

// Redirect for shortcuts
router.redirect({
  '/jobs': '/user/jobs',
  '/me': '/user'
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach(function (transition) {
  // window.console.log('Transition', transition)
  if (transition.to.auth && (transition.to.router.app.$store.state.token === 'null')) {
    window.console.log('Not authenticated')
    transition.redirect('/login')
  } else {
    transition.next()
  }
})

// Resource logic
Vue.use(Resource)

Vue.http.interceptors.push({
  request: function (request) {
    /*
      Enable this when you have a backend that you authenticate against
    var headers = request.headers

    if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
      headers.Authorization = this.$store.state.token
    }
    */
    // console.log(headers)
    return request
  },
  response: function (response) {
    return response
  }
})

// Start out app!
Vue.config.debug = true
router.start(AppView, '#root')
