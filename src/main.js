// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

Vue.config.productionTip = false
var config = {
  apiKey: 'AIzaSyB9K-i0ZiFB7HISJtGFVadC9pdO9nc5qX8',
  authDomain: 'todo-list-e337a.firebaseapp.com',
  databaseURL: 'https://todo-list-e337a.firebaseio.com',
  projectId: 'todo-list-e337a',
  storageBucket: 'todo-list-e337a.appspot.com',
  messagingSenderId: '78015838709'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
