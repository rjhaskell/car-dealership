namespace CarDealership.Services {
    export class CarService {
        private carList: Models.Car[];

        /**
         * Returns a list of cars which are stored in memory
         */
        public listCars(): Models.Car[] {
            return this.carList;
        }

        /**
         * Returns a car that is requested by its index
         * @param id The index of the car to return
         */
        public get(id: number): Models.Car {
            return this.carList.filter((item) => item.id == id)[0];
        }

        public create(car: Models.Car): boolean {
            if(car) {
                this.carList.push(car);

                return true;
            }

            return false;
        }

        public update(id: number, car: Models.Car): boolean {
            // get record
            let record = this.get(id);

            // did the record requested exist?
            if(record) {
                // get existing records index
                let index = this.carList.indexOf(record);

                // Update record
                this.carList[index] = record;

                return true;
            }

            return false;
        }

        public delete(id: number): boolean {
            // get record
            let record = this.get(id);

            // did the record requested exist?
            if(record) {
                // get existing records index
                let index = this.carList.indexOf(record);

                // Remove record
                this.carList.splice(index, 1);

                return true;
            }

            return false;
        }

        static $inject = [
            '$http'
        ];

        constructor(
            $http: ng.IHttpService
        ) {
            $http.get<Models.Car[]>('data/cars.json')
                .then((response) => {
                    this.carList = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve cars.');
                });
        }
    }
}