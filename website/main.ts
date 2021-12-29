import { createApp } from 'vue';
import App from './App.vue';

// 导入组件库
// import SUI from 'sydney-ui';
import SUI from '../lib/index';
// 引入组件库的样式
import 'theme-chalk/lib/index.css';

// 创建应用并使用组件库
createApp(App).use(SUI).mount('#app');
