function Config($stateProvider,$locationProvider) {
    $stateProvider.state({
        name: 'main',
        url: '/main/:name',
        component: 'main'
    });

    $stateProvider.state({
        name: 'test',
        url: '/test',
        component: 'testComponent'
    });

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
}

Config.$inject = [
    '$stateProvider',
    '$locationProvider'
];

export default Config;