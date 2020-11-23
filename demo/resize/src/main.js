import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
//import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import store from './store'
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(ElementUI);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
