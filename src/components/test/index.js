import { module } from '../../app.module';  //it is required to register a new component
import template from './test.component.html';
import { TestComponent } from './test.component';

export const TestComponentName = 'testComponent'; //it has to be cammelCases

const TestComponentDefinition = {
	template: template,
	controller: TestComponent
}

module.component(TestComponentName,TestComponentDefinition);