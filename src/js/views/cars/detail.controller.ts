namespace CarDealership.Views.Cars {
    export class DetailController {
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
        
        public createCar(): void {
            if(this.CarService.create(this.car)){
                this.$state.go('Cars');
                return;
            }

            alert('Failed to create car!');
        }

        public editCar(): void {
            if(this.CarService.update(this.car.id, this.car)) {
                this.$state.go('Cars');

                return;
            }

            alert(`FAILED to edit ${this.car.make}`);
        }

        public deleteCar(): void {
            if(this.CarService.delete(this.car.id)) {
                this.$state.go('Cars');
                
                return;
            }

            alert(`FAILED to delete ${this.car.make}!`);
        }
    }
}