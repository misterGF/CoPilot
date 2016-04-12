<template>
  <h1 class="text-center">Settings</h1>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-info">
          <!-- Input Addons -->
          <div class="box-header with-border">
            <h3 class="box-title">Inputs</h3>
          </div>

          <div class="box-body">
            <!-- calendar group -->
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%"></datepicker>
            </div>
            <br />
            <br />

            <!-- with characthers -->
            <div class="input-group">
              <span class="input-group-addon">@</span>
              <input class="form-control" placeholder="Username" type="text">
            </div>
            <br />
            <div class="input-group">
              <span class="input-group-addon">$</span>
              <input class="form-control" type="text">
              <span class="input-group-addon">.00</span>
            </div>
            <br />

            <!-- with icons from font awesome -->
            <h4>With icons</h4>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input class="form-control" placeholder="Email" type="email">
            </div>
            <br />
            <div class="input-group">
              <input class="form-control" type="text">
              <span class="input-group-addon"><i class="fa fa-check"></i></span>
            </div>
            <br>

            <!-- Success/Error heads up input -->
            <h4>With border indicator</h4>
            <div class="form-group has-success">
              <label class="control-label" for="inputSuccess"><i class="fa fa-check"></i> Input with success</label>
              <input class="form-control" id="inputSuccess" placeholder="Enter ..." type="text">
              <span class="help-block">Help block with success</span>
            </div>
            <br />
            <div class="form-group has-error">
              <label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i> Input with error</label>
              <input class="form-control" id="inputError" placeholder="Enter ..." type="text">
              <span class="help-block">Help block with error</span>
            </div>

            <!-- select examples -->
            <h4>Select Options</h4>
            <div class="form-group">
              <label>Select</label>
              <select class="form-control">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>
            <br />
            <div class="form-group">
              <label>Select Multiple</label>
              <select multiple="" class="form-control">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>

            <!-- /input-group -->
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
require('moment')
import datepicker from 'vue-date-picker'

export default {
  name: 'Settings',
  computed: {
    datetime: function () {
      return new Date()
    }
  },
  components: { datepicker },
  methods: {
    clearInput: function (vueModel) {
      vueModel = ''
    }
  },
  ready: function () {
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
