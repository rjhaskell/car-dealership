namespace CarDealership {
    let module: ng.IModule = angular.module('app', [
        /*-- Third Party Modules --*/
        'ngResource',
        'ui.router',

        /*-- Application Modules --*/
        'app.filters',
        'app.services',
        'app.views'
    ]);

    module.config(Configuration);

    module.run(Run);
}