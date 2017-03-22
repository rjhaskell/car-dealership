namespace CarDealership.Views.Cars {
    export class DeleteController {
        public car: Models.Car;

        static $inject = [
            '$state',
            '$stateParams',
            'CarService'
        ];

        constructor (
            private $state: ng.ui.IStateService,
            $stateParams: ng.ui.IStateParamsService,
            private CarService: Services.CarService
        ) {
            this.car = CarService.get($stateParams['id']);
        }

        public deleteCar(): void {
            if(this.CarService.delete(this.car.id)) {
                this.$state.go('Cars');
                
                return;
            }

            alert(`FAILED to delete ${this.car.title}!`);
        }
    }
}