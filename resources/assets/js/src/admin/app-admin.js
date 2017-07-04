
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/*require('./bootstrap');

window.Vue = require('vue');*/

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));
//Vue.component('breadcrumb', require('./components/Breadcrumb.vue'));

/*import MainHeader from './components/backend/partials/Header.vue';
import Sidebar from './components/backend/partials/Sidebar.vue';
import Breadcrumb from './components/backend/partials/Breadcrumb.vue';
import PageTitle from './components/backend/partials/PageTitle.vue';


const app = new Vue({
    el: '#backend',
    components: {
        MainHeader, Breadcrumb, PageTitle, Sidebar
    },
});*/

/* Configs */
import '../../bootstrap.js';
import router from './routes';
import App from './views/App';

import DashboardLink from './common-views/DashboardLink';



Vue.component('dashboard-link', DashboardLink);

let Admin = Vue.component('app', App);

Admin = new Admin({
    el: '#backend',
    router
});

