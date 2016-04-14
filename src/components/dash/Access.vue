<template>
  <h1 class="text-center">Access</h1>
  <h4 class="text-center">Where our users are coming from.</h4>

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
        <div class="row">
          <div class="col-md-9 col-sm-8">
            <div class="pad">
              <!-- Map will be created here -->
              <div id="world-map-markers" style="height: 400px;">
                <div class="jvectormap-container" style="width: 100%; height: 100%; position: relative; overflow: hidden; background-color: transparent;">
                </div>
              </div>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-4">
            <div class="pad box-pane-right bg-green" style="min-height: 280px">
              <div v-for="stat in stats" class="description-block margin-bottom">
                <div class="sparkbar pad" data-color="#fff"><canvas height="30" width="34" style="display: inline-block; width: 34px; height: 30px; vertical-align: top;"></canvas></div>
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
    window.jQuery('#world-map-markers').vectorMap()
  }
}
</script>

<style>
.fake { color: 'red'}
</style>
