import axios from axios;

//Vue.http.interceptors.push((request, next) => {
  /*
    Enable this when you have a backend that you authenticate against
  var headers = request.headers

  if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
    headers.Authorization = this.$store.state.token
  }
  */
  // console.log(headers)

  // continue to next interceptor without modifying the response
  //next()
//})

export default {
  /*callAPI: function (method, url, data) {
    this.callingAPI = true
    url = url || this.serverURI
    // if no url is passed then inheret local server URI
    return this.caller({
      url: url,
      method: method,
      data: data
    })
  }*/
}
