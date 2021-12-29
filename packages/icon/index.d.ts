import Icon from './src/icon.vue';
declare type IWithInstall<T> = T & {
    install(): void;
};
declare const _Icon: IWithInstall<typeof Icon>;
export default _Icon;
