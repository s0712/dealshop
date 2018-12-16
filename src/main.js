// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../src/assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import location from './location/index';
import './request';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import {
	Input,
	Slider,
	Pagination,
	Radio,
	RadioGroup,
	Button,
	Checkbox,
	CheckboxGroup,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Tabs,
	TabPane,
	Table,
	TableColumn,
	Form,
	FormItem,
	Select,
	Option,
	Dialog,
	Message
} from 'element-ui';
Vue.use(Input);
Vue.use(Slider);
Vue.use(Pagination);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Dialog);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.prototype.$location = location;
Vue.prototype.$axios = axios;
Vue.prototype.moment = moment;
Vue.prototype.$message = Message;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
