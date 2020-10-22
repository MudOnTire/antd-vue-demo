import Vue from 'vue'
import { Table } from 'ant-design-vue';
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(Table.name, Table);

new Vue({
  render: h => h(App),
}).$mount('#app')
