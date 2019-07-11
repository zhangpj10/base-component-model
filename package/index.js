import Test from './test/index';

const components = [
    Test
];

const install = (Vue) => {
    components.map(component => Vue.component(component.name, component));
};

export default {
    install,
    Test
}
