namespace CarDealership.Views.Cars {
    export class CarsController {
        public filterData: string = '';

        public get carList(): Models.Car[] {
            return this.CarService.listCars();
        }

        static $inject = [
            'CarService'
        ];

        constructor (
            private CarService: Services.CarService
        ) {
            
        }
    }
}