namespace CarDealership.Models {
    export interface IAuthenticatedState extends ng.ui.IState {
        data: Models.IAuthenticatedStateData;
    }

    export interface IAuthenticatedStateData {
        requiresAuthentication: boolean
    }
}