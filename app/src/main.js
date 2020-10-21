import Vue from 'vue'
import {
  Button, Modal, Calendar, Transfer, Popconfirm, Radio, Pagination,
  Select, LocaleProvider, DatePicker, TimePicker
} from 'ant-design-vue';
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Modal.name, Modal);
Vue.component(Calendar.name, Calendar);
Vue.component(Transfer.name, Transfer);
Vue.component(Popconfirm.name, Popconfirm);
Vue.component(Radio.name, Radio);
Vue.component(Radio.Group.name, Radio.Group);
Vue.component(Radio.Button.name, Radio.Button);
Vue.component(Pagination.name, Pagination);
Vue.component(Select.name, Select);
Vue.component(DatePicker.name, DatePicker);
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(LocaleProvider.name, LocaleProvider);

new Vue({
  render: h => h(App),
}).$mount('#app')
