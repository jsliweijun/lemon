import Button from './src/button.vue';
declare type IWithInstall<T> = T & {
    install(): void;
};
declare const _Button: IWithInstall<typeof Button>;
export default _Button;
