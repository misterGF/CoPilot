<template>
  <section class='content'>
    <h1 class="text-center">Access</h1>
    <h4 class="text-center">Where our users are coming from.</h4>

  <div class="row">
    <div class="col-md-12">
      <!-- MAP & BOX PANE -->
      <div class="box box-success">
        <div class="box-header with-border">
          <h3 class="box-title">Visitors Report</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
            </button>
            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body no-padding">
          <div class="row no-gutters">
            <div class="col-md-8">
                <!-- Map will be created here -->
                <div id="world-map-markers"></div>
            </div>
            <!-- /.col -->
            <div class="col-md-4">
              <div class="pad box-pane-right bg-green" style="min-height: 400px">
                <div v-for="stat in stats" class="description-block margin-bottom">
                  <div class="row" data-color="#fff"><i class="fa fa-bar-chart-o fa-3x"></i></div>
                  <h5 class="description-header">{{stat.header}}</h5>
                  <span class="description-text">{{stat.text}}</span>
                </div>
              </div>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
      </div>
      <link rel="stylesheet" href="/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.css" >
    </div>
  </div>
  </section>
</template>
<script>
export default {
  name: 'Access',
  data: function () {
    return {
      stats: [{
        header: '8390',
        text: 'Visitors'
      }, {
        header: '30%',
        text: 'Referrals'
      }, {
        header: '70%',
        text: 'Organic'
      }]
    }
  },
  ready: function () {
    // Add map
    window.jQuery.getScript('/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js', function (data, textStatus, jqxhr) {
      window.jQuery.getScript('/static/js/plugins/jvectormap/jquery-jvectormap-world-mill.js', function (data, textStatus, jqxhr) {
        window.jQuery('#world-map-markers').vectorMap({
          map: 'world_mill'
        })
      })
    })
  }
}
</script>

<style>
.fake { color: 'red'}
#world-map-markers svg {
  height: 355px;
}
.row.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.row.no-gutters > [class^="col-"],
.row.no-gutters > [class*=" col-"] {
  padding-right: 0;
  padding-left: 0;
}
</style>
