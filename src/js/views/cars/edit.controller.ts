namespace CarDealership.Views.Cars {
    export class EditController {
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

        public editCar(): void {
            if(this.CarService.update(this.car.id, this.car)) {
                this.$state.go('Cars');

                return;
            }

            alert(`FAILED to edit ${this.car.title}`);
        }
    }
}