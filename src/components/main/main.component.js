export class MainComponent {
    constructor($stateParams) {
        this.name = 'This is MainComponent!';
        this.$stateParams = $stateParams;
    }

    $onInit() { 
        this.name = this.$stateParams.name;
        console.log('mainComponent Initialized')
    }
}

MainComponent.$inject = [
    "$stateParams"
];