<template>
  <div>
    <h1 class="text-center">Repos</h1>
    <h4 class="text-center">Github Repos</h4>

    <section class="content">
      <div class="row">
        <div v-if="error">
          Found an error
        </div>
        <div v-else>
          <div class="col-md-4" v-if="response" v-for="repo in response" >
            <div class="box box-widget widget-user">
              <div class="widget-user-header bg-aqua-active text-center">
                <h3 class="widget-user-username center-text">{{repo.name }}</h3>
              </div>
              <div class="widget-user-image">
                <img class="img-circle" v-bind:src="repo.owner.avatar_url" alt="repo.owner.login + ' Avatar'">
              </div>
              <div class="box-footer">
                <div class="row">
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <h5 class="description-header">{{repo.stargazers_count}}</h5>
                      <span class="description-text">Star</span>
                    </div>
                  </div>
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <a v-bind:href="repo.owner.html_url" target="_blank">
                        <button type="button" class="btn btn-default btn-lg">Visit</button>
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="description-block">
                      <h5 class="description-header">{{repo.forks_count}}</h5>
                      <span class="description-text">Forks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Repository',
  data () {
    return {
      githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      response: null,
      error: null
    }
  },
  methods: {
    callGitHub () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log('GitHub Response:', response)

          if (response.status !== 200) {
            this.error = response.statusText
            return
          }

          this.response = response.data.items
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response.statusText
        })
    }
  },
  mounted () {
    this.callGitHub()
  }
}
</script>

<style>
</style>
