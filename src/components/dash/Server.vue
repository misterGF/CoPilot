<template>
  <h1 class="text-center">Our Environment</h1>
  <section class="content">
    <div class="row" v-if="servers">
      <div class="col-md-4" v-for="server in servers">
        <div class="box box-{{server.status}}">
          <div class="box-header with-border">
            <i class="fa fa-{{server.icon}} fa-2x"></i>
            <h3 class="box-title">{{server.name}}</h3>
          </div>
          <div class="box-body">

            <span>{{server.description}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'Servers',
    data: function () {
      return {
        servers: [{
          name: 'www01',
          status: 'success',
          icon: 'globe',
          description: 'Web server that runs our sites'
        }, {
          name: 'sql01',
          status: 'danger',
          icon: 'database',
          description: 'mySQL server used for reporting'
        }, {
          name: 'mongoDB01',
          status: 'info',
          icon: 'file-code-o',
          description: 'Main DB server'
        }, {
          name: 'ldap01',
          status: 'success',
          icon: 'key',
          description: 'Authentication server'
        }, {
          name: 'mgmt01',
          status: 'success',
          icon: 'home',
          description: 'Management server with all tools'
        }, {
          name: 'bkup01',
          status: 'warning',
          icon: 'backward',
          description: 'Backup server'
        }]
      }
    }
  }
</script>

<style>
</style>
