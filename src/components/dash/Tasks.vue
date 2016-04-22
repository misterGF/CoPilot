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
          <i class="fa {{line.icon}} bg-{{line.color}}"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>&nbsp;{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body" v-if="line.body">
              {{{line.body}}}
            </div>
            <div class="timeline-footer" v-if="btn">
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
      today: function () {
        return moment().format('MMM Do YY')
      },
      timeline: function () {
        return [{
          icon: 'fa-envelope',
          color: 'blue',
          title: 'Write short novel',
          time: moment().endOf('day').fromNow(),
          body: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
          buttons: [{
            type: 'primary',
            message: 'Read more'
          }]
        },
        {
          icon: 'fa-user',
          color: 'yellow',
          title: 'Sarah Young accepted your friend request',
          time: moment('20150620', 'MMM Do YY').fromNow()
        },
        {
          icon: 'fa-camera',
          color: 'purple',
          title: 'Watch a youTube video',
          time: moment('20130620', 'YYYYMMDD').fromNow(),
          body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allowfullscreen></iframe></div>'
        }]
      }
    },
    methods: {
      ready: function () {
        // debugger
        // this.callGitHub()
        console.log('inside of task')
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
