namespace CarDealership.Views.Cars {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Cars', <ng.ui.IState>{
                url: '/cars',
                templateUrl: 'js/views/cars/cars.view.html',
                controller: 'CarsController',
                controllerAs: 'vm'
            })
            .state('CarDetail', <ng.ui.IState>{
                url: '/cars/:id',
                templateUrl: 'js/views/cars/detail.view.html',
                controller: 'CarDetailController',
                controllerAs: 'vm'
            })
            .state('CarCreate', <ng.ui.IState>{
                url: '/cars/new/create',
                templateUrl: 'js/views/cars/create.view.html',
                controller: 'CarDetailController',
                controllerAs: 'vm'
            })
            .state('CarEdit', <ng.ui.IState>{
                url: '/cars/:id/edit',
                templateUrl: 'js/views/cars/edit.view.html',
                controller: 'CarDetailController',
                controllerAs: 'vm'
            })
            .state('CarDelete', <ng.ui.IState>{
                url: '/cars/:id/delete',
                templateUrl: 'js/views/cars/delete.view.html',
                controller: 'CarDetailController',
                controllerAs: 'vm'
            });
    }
}