<template>
  <!-- Main content -->
  <section class='content'>
    <!-- Info boxes -->
    <div class='row'>
      <div class="alert alert-success alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h4><i class="icon fa fa-check"></i> CoPilot is open source!</h4>
        Click on icon to check out it out on github. <a href='https://github.com/misterGF/CoPilot' target='_blank'><i class='fa fa-github fa-2x'></i></a>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-aqua'><i class='ion ion-ios-gear-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>CPU Traffic</span>
            <span class='info-box-number'>90<small>%</small></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-red'><i class='fa fa-google-plus'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Likes</span>
            <span class='info-box-number'>41,410</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class='clearfix visible-sm-block'></div>

      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-green'><i class='ion ion-ios-cart-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Sales</span>
            <span class='info-box-number'>760</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-yellow'><i class='ion ion-ios-people-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>New Members</span>
            <span class='info-box-number'>2,000</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class='row'>
      <div class='col-md-12 text-center'>
        <canvas id="canvas" height="300" width="800"></canvas>
        <div>

        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Main row -->
    <div class='row'>
      <div class='col-md-6'>
        <div class='info-box bg-yellow'>
          <span class='info-box-icon'><i class='ion ion-ios-pricetag-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Inventory</span>
            <span class='info-box-number'>5,200</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 50%'></div>
            </div>
                <span class='progress-description'>
                  50% Increase in 30 Days
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-6'>
        <div class='info-box bg-green'>
          <span class='info-box-icon'><i class='ion ion-ios-heart-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Mentions</span>
            <span class='info-box-number'>92,050</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 20%'></div>
            </div>
                <span class='progress-description'>
                  20% Increase in 30 Days
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-6'>
        <div class='info-box bg-red'>
          <span class='info-box-icon'><i class='ion ion-ios-cloud-download-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Downloads</span>
            <span class='info-box-number'>114,381</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 70%'></div>
            </div>
                <span class='progress-description'>
                  70% Increase in 30 Days
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
      <div class='col-md-6'>
        <div class='info-box bg-aqua'>
          <span class='info-box-icon'><i class='ion-ios-chatbubble-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Direct Messages</span>
            <span class='info-box-number'>163,921</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 40%'></div>
            </div>
                <span class='progress-description'>
                  40% Increase in 30 Days
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>
import Chart from 'chart.js'

module.exports = {
  ready: function () {
    var ctx = document.getElementById('canvas').getContext('2d')
    var data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    new Chart(ctx).Line(data, {responsive: false})
  }
}
</script>
