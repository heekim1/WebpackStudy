import { module } from '../../app.module';
import { MainComponent } from './main.component';
import template from './main.component.html';

export const MainComponentName = 'main';

const MainComponentDefinition = {
    template: template,
    controller: MainComponent
};

module.component(MainComponentName, MainComponentDefinition);