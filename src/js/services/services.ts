namespace CarDealership.Services {
    let module: ng.IModule = angular.module('app.services', []);

    module.service('CarService', Services.CarService);
    module.service('AuthenticationService', Services.AuthenticationService);
}