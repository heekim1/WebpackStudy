import { CommonModule } from '../../common.module';

import template from './common-main.component.html';
import { CommonMainComponent } from './common-main.component';

export const CommonMainComponentName = 'commonMain';

const CommonMainComponentDefinition = {
    template: template,
    controller: CommonMainComponent
};

CommonModule.component(CommonMainComponentName,CommonMainComponentDefinition);