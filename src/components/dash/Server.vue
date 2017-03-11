<template>
  <div>
    <h1 class="text-center">Our Environment</h1>
    <section class="content">
      <div class="row" v-if="servers">
        <div class="col-md-4" v-for="server in servers">
          <div v-bind:class="'box box-' + server.status">
            <div class="box-header with-border">
              <i v-bind:class="'fa fa-' + server.icon + ' fa-2x'"></i>
              <h3 class="box-title">{{server.name}}</h3>
            </div>
            <div class="box-body">

              <span>{{server.description}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {servers} from '../../demo'

  export default {
    name: 'Servers',
    data () {
      return {
        servers
      }
    }
  }
</script>

<style>
</style>
