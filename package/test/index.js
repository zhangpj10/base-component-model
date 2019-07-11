import Test from './src/test';

Test.install = function (Vue) { // eslint-disable-line
    Vue.component(Test.name, Test);
};

export default Test;
