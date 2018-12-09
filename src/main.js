// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../src/assets/css/reset.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Input, Slider, Pagination, Radio, RadioGroup, Button, Checkbox, CheckboxGroup } from 'element-ui';
Vue.use(Input);
Vue.use(Slider);
Vue.use(Pagination);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
