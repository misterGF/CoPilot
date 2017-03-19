<template>
  <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Tasks</h1>
      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{today}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="line in timeline">
          <!-- timeline icon -->
          <i v-bind:class="'fa ' + line.icon + ' bg-' + line.color"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>&nbsp;{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body" v-if="line.body" v-html="line.body">
            </div>
            <div class="timeline-footer" v-if="line.buttons">
              <a v-for="btn in line.buttons" v-bind:class="'btn btn-' + btn.type + ' btn-xs'" >{{btn.message}}</a>
            </div>
          </div>
        </li>
      <!-- END timeline item -->
      </ul>
    </div>
  </section>
</template>
<script>
  import moment from 'moment'
  import {timeline} from '../../demo'

  export default {
    name: 'Tasks',
    computed: {
      today () {
        return moment().format('MMM Do YY')
      },
      timeline () {
        return timeline
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
