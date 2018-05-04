import angular from 'angular';
//router will be used from global

import { Config } from './common.config';
import { Run } from './common.run';

export const CommonModuleName = 'app.common';

export const CommonModule = angular.module(CommonModuleName,[])
    .config(Config)
    .run(Run);