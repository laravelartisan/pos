/* Configs */
import './bootstrap.js';
import router from './routes';
import App from './views/App';

import TextInput from './core/Input/Text';
import TextAreaInput from './core/Input/TextArea';
import SelectInput from './core/Input/Select';
import CheckboxInput from './core/Input/Checkbox';
import CheckboxGridInput from './core/Input/CheckboxGrid';
import DatePicker from './core/Input/DatePicker';
import Title from './core/Typography/Title';
import Subheading from './core/Typography/Subheading';
import Code from './core/Typography/Code';
import PageContent from './core/Page/PageContent';
import Notification from './core/Notification/Notification';
import Table from './core/Table/Table';
import ListTable from './widgets/ListTable/ListTable';
import ListTablePagination from './widgets/ListTable/ListTablePagination';
import EntityEditor from './widgets/EntityEditor/EntityEditor';

Vue.component('rw-text-input', TextInput);
Vue.component('rw-textarea-input', TextAreaInput);
Vue.component('rw-select-input', SelectInput);
Vue.component('rw-checkbox-input', CheckboxInput);
Vue.component('rw-checkbox-grid', CheckboxGridInput);
Vue.component('rw-date-picker', DatePicker);
Vue.component('rw-title', Title);
Vue.component('rw-subheading', Subheading);
Vue.component('rw-code', Code);
Vue.component('rw-table', Table);
Vue.component('notification', Notification);
Vue.component('page-content', PageContent);
Vue.component('list-table', ListTable);
Vue.component('list-table-pagination', ListTablePagination);
Vue.component('rw-entity-editor', EntityEditor);

let Admin = Vue.component('app', App);

Admin = new Admin({
  el: '#app',
  router
});
