import VueRouter from 'vue-router';
import DashboardView from './views/Dashboard';
import CategoriesView from './views/Categories';
import ProductsView from './views/Products';
import OrdersView from './views/Orders';
import UsersView from './views/Users';
import TestView from './views/Test';


let routes = [{
  path: '/',
  component: DashboardView
},
{
  path: '/categories',
  component: CategoriesView
},
{
    path: '/products',
    component: ProductsView
},
{
    path: '/orders',
    component: OrdersView
},
{
    path: '/test',
    component: TestView
},

{
  path: '/users',
  component: UsersView,
  /*children: [{
    path: ':id',
    component: UsersDetailView,
    props: true
  }]*/
},
];

export default new VueRouter({
  routes,
  base: '/pos-admin/',
  linkActiveClass: 'nav-active'
});
