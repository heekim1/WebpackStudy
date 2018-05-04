import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ConfigBlock from './app.config';
import RunBlock from './app.run';

import { CommonModuleName } from './common/common.module';

const moduleName = 'app';

// dependencies should be always module
const dependencies = [
    uiRouter,
    CommonModuleName
];

const module = angular.module(moduleName, dependencies)
    .config(ConfigBlock)
    .run(RunBlock);

export default moduleName;

export {
    module
}

// before module creation
// mudule creation
// after module creation