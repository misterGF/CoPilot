<template>
  <div class="container container-table">
      <div class="row vertical-10p">
        <div class="container">
          <img src="/static/img/logo.png" class="center-block logo">
          <div class="text-center col-md-4 col-sm-offset-4">
            <!-- errors -->
            <div v-if=response class="text-red"><p>{{response  | capitalize }}</p></div>

            <!-- login form -->
            <form class="ui form loginForm"  @submit.prevent="checkCreds">

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input class="form-control" name="username" placeholder="Username" type="text" v-model="username">
              </div>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
              </div>
              <button type="submit" class="btn btn-primary btn-lg {{loading}}">Submit</button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
module.exports = {
  name: 'Login',
  data: function (router) {
    return {
      section: 'Login',
      loading: '',
      username: '',
      password: '',
      response: ''
    }
  },
  methods: {
    checkCreds: function () {
      //  Change submit button
      var self = this
      var store = this.$store

      this.toggleLoading()
      this.resetResponse()
      store.dispatch('TOGGLE_LOADING')

      //  Login
      this.$parent.callAPI('POST', '/login', { username: this.username, password: this.password }).then(function (response) {
        store.dispatch('TOGGLE_LOADING')

        if (response.data) {
          var data = response.data

          if (data.error) {
            if (data.error.name) { //  Object from LDAP at this point
              switch (data.error.name) {
                case 'InvalidCredentialsError' : self.response = 'Username/Password incorrect. Please try again.'; break
                default: self.response = data.error.name
              }
            } else {
              self.response = data.error
            }
          } else {
            //  success. Let's load up the dashboard
            if (data.user) {
              store.dispatch('SET_USER', data.user)
              var token = 'Bearer ' + data.token
              store.dispatch('SET_TOKEN', token)

              // Save to local storage as well
              if (window.localStorage) {
                window.localStorage.setItem('user', JSON.stringify(data.user))
                window.localStorage.setItem('token', token)
              }

              this.$router.go(data.redirect)
            }
          }
        } else {
          self.response = 'Did not receive a response. Please try again in a few minutes'
        }

        self.toggleLoading()
      }, function (response) {
        // error
        store.dispatch('TOGGLE_LOADING')
        console.log('Error', response)
        self.response = 'Server appears to be offline'
        self.toggleLoading()
      })
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}
</script>

<style>
html, body, .container-table {
  height: 100%;
  background-color: #282B30 !important;
}
.container-table {
    display: table;
    color: white;
}
.vertical-center-row {
    display: table-cell;
    vertical-align: middle;
}
.vertical-20p {
  padding-top: 20%;
}
.vertical-10p {
  padding-top: 10%;
}
.logo {
  width: 15em;
  padding: 3em;
}
.loginForm .input-group {
  padding-bottom: 1em;
  height: 4em;
}
.input-group input {
  height: 4em;
}
</style>
