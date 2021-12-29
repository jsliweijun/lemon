import { App } from 'vue';
import Button from './src/button.vue';

Button.install = (app: App): void => {
    app.component(Button.name, Button); //注册全局组件
};

type IWithInstall<T> = T & { install(): void };

const _Button: IWithInstall<typeof Button> = Button;

export default _Button;
