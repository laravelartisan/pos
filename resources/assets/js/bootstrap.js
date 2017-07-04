import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';


/* Setup Vue with plugins */
window.Vue = Vue;
Vue.use(VueRouter);


/* Config axios */
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + Pegasus.jwtToken;
window.axios.defaults.baseURL = '/api/admin/';


