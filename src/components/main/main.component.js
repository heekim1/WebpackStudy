export class MainComponent {
    constructor() {
        this.name = 'This is MainComponent!';
    }

    $onInit() { 
        console.log('mainComponent Initialized')
    }
}

MainComponent.$inject = [];