import Vue from 'vue';
import App from './App';
import Test from '../package/index';
// import router from './router';


// if (process.env.VUE_APP_BUILD_MODE) {
//   require ('./mock'); // eslint-disable-line
// }
Vue.use(Test);

// 开启debug模式
Vue.config.debug = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
