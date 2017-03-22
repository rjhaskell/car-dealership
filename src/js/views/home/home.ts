namespace CarDealership.Views.Home {
    let module: ng.IModule = angular.module('view.home', []);

    module.config(Home.Configuration);
    
    module.controller('HomeController', Home.HomeController);
}