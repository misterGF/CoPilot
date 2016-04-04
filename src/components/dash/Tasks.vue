<template>
  <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Timeline</h1>
      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">10 Feb. 2014</span>
        </li>
        <!-- timeline item -->
        <li v-for="line in timeline">
          <!-- timeline icon -->
          <i class="fa {{line.icon}} bg-blue"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body">
              {{line.body}}
            </div>
            <div class="timeline-footer">
              <a class="btn btn-{{btn.type}} btn-xs" v-for="btn in line.buttons">{{btn.message}}</a>
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

  export default {
    name: 'Tasks',
    computed: {
      timeline: function () {
        return [{
          icon: 'fa-envelope',
          title: 'Log Search',
          time: moment().endOf('day').fromNow(),
          body: 'Body',
          buttons: [{
            type: 'primary',
            message: 'More'
          },
          {
            type: 'success',
            message: 'Replay'
          }]
        },
        {
          icon: 'fa-envelope',
          title: 'Log Search',
          time: '12:39',
          body: 'Body',
          buttons: [{
            type: 'primary',
            message: 'More'
          },
          {
            type: 'success',
            message: 'Replay'
          }]
        },
        {
          icon: 'fa-envelope',
          title: 'Log Search',
          time: '12:39',
          body: 'Body',
          buttons: [{
            type: 'primary',
            message: 'More'
          },
          {
            type: 'success',
            message: 'Replay'
          }]
        }]
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
