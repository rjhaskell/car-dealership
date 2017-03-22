namespace CarDealership.Filters {
    export function IfEmptyFilter() {
        return function (input: any, defaultValue: any) {
            if (angular.isUndefined(input) || input === null || input === '') {
                return defaultValue;
            }

            return input;
        }
    }
}