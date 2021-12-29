import { App } from 'vue';
import Button from '@sydney-ui/button';
import Icon from '@sydney-ui/icon';

const components = [Button, Icon];

const install = (app: App) => {
    components.forEach((component) => {
        app.component(component.name, component); // 全局注册我们的组件
    });
};

export default {
    install,
};
