import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import axios from 'axios';
import Form from './core/Form/Form';

/* Setup Vue with plugins */
window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueMaterial)

/* Config axios */
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + Pegasus.jwtToken;
window.axios.defaults.baseURL = '/api/admin-two/';

/* Assign global components */
window.Form = Form;

/* Setup a default theme for Vue Material */
Vue.material.registerTheme({
  default: {
    primary: 'blue-grey',
    accent: 'blue'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'blue'
  }
});
