Introduction
============

<img src="http://res.cloudinary.com/gatec21/image/upload/v1459799224/logo_blk_svgsqp.png" alt="CoPilot Logo" style="padding-left: 40%">

**CoPilot** is a fully responsive admin template that is forked from [AdminLTE](https://almsaeedstudio.com). The difference here is that this repo is tailored to use with vue.js. The UI is based on the [Bootstrap 3](https://github.com/twbs/bootstrap) framework. Highly customizable and easy to use. Fits many screen resolutions from small mobile devices to large desktops.


[Take it for a spin](http://copilot.misterGF.io)

!["CoPilot Screenshot"](http://res.cloudinary.com/gatec21/image/upload/v1459799350/screenshot_t2kpol.png)

In an attempt to keep the project clean I have not included every plugin/feature that AdminLTE offers. You simply need to add the plugin in the /static/js/plugin folder to include them or use npm. I've included the popular ones.

The structure of the app is scaffolded by [vue-cli](https://github.com/vuejs/vue-cli). Which is a simple CLI tool that setups our environment. CoPilot uses the webpack package. So we get a full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.

We leverage all the goodies that vue.js offers. Vue-Router for routing. Vue-Resource for AJAX calls. Vuex for state management.

I also recommend that you install vue-devtools for Chrome so that you can easily inspect that state of vue.
![vue-devtools](http://res.cloudinary.com/gatec21/image/upload/v1461611064/copilot-vuetools_t1mvpg.png)

The data that is being pulled uses faker.js to make it dynamic. This is for demo purposes. Look for demo.* for information that is generated dynamically.

Installation
------------
Installing CoPilot is easy.

#### Download:

Download from Github

#### Using The Command Line:

```
git clone https://github.com/misterGF/CoPilot.git
```


#### Build Setup

``` bash
# install dependencies
sudo npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run server (after build)
npm run prod

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


Documentation
-------------
Depending on the component you are working on you should have the following links handy.

- AdminLTE - [online documentation](https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html)
- BootStrap 3 - [online documentation](https://github.com/twbs/bootstrap)
- Vue.js - [online documentation](https://github.com/vuejs/vue)
- Vue-Resource - [online documentation](https://github.com/vuejs/vue-resource)
- Vue-Router - [online documentation](https://github.com/vuejs/vue-router)
- Vuex - [online documentation](https://github.com/vuejs/vuex)

Information and tips about CoPilot can be found in the [wiki](https://github.com/misterGF/CoPilot/wiki).

Browser Support
---------------
- IE 9+
- Firefox (latest)
- Chrome (latest)
- Safari (latest)
- Opera (latest)

Contribution
------------
Contribution are always **welcome and recommended**! Here is how:

- Fork the repository ([here is the guide](https://help.github.com/articles/fork-a-repo/)).
- Clone to your machine ```git clone https://github.com/YOUR_USERNAME/CoPilot.git```
- Make your changes
- Create a pull request

TODOS
-------
The purpose of this project is to provide a full example of how to leverage Vue. If you find anything that can be Vue-ified please send me a PR.

License
-------
CoPilot is an open source project by [Gil Ferreira](http://gferreira.me) that is licensed under [MIT](http://opensource.org/licenses/MIT).

Image Credits
-------------
[Pixeden](http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd)

[Graphicsfuel](http://www.graphicsfuel.com/2013/02/13-high-resolution-blur-backgrounds/)

[Pickaface](http://pickaface.net/)

[Unsplash](https://unsplash.com/)

[Uifaces](http://uifaces.com/)

Donations
---------
Donations are **greatly appreciated!**

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif "CoPilot")](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W874GLKJ92SGN "Donate")
