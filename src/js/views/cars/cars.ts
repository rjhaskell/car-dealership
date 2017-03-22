namespace CarDealership.Views.Cars {
    let module: ng.IModule = angular.module('view.cars', []);

    module.config(Cars.Configuration);

    module.controller('CarsController', Cars.CarsController);
    module.controller('CarDetailController', Cars.DetailController);
    // module.controller('CarEditController', Cars.EditController);
    // module.controller('CarDeleteController', Cars.DeleteController);
}