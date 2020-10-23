import Vue from 'vue'
import { Table, Icon } from 'ant-design-vue';
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(Table.name, Table);
Vue.component(Icon.name, Icon);

new Vue({
  render: h => h(App),
}).$mount('#app')
