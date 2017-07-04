import VueRouter from 'vue-router';
import DashboardView from './views/Dashboard';
import UsersView from './views/Users';
import UsersDetailView from './views/UsersDetail';
import CustomersView from './views/Customers';
import CustomersDetailView from './views/CustomersDetail';
import MaintenanceView from './views/Maintenance';
import TestView from './views/Test';

let routes = [{
  path: '/',
  component: DashboardView
},
{
  path: '/customers',
  component: CustomersView,
  children: [{
    path: ':id',
    component: CustomersDetailView,
    props: true
  }]
},
{
  path: '/users',
  component: UsersView,
  children: [{
    path: ':id',
    component: UsersDetailView,
    props: true
  }]
},
{
  path: '/maintenance',
  component: MaintenanceView
},
{
  path: '/test',
  component: TestView
}];

export default new VueRouter({
  routes,
  base: '/admin2',
  linkActiveClass: 'nav-active'
});
