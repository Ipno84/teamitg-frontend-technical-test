interface IEmissions {
    template: string;
    value: number;
}

interface IMedia {
    name: string;
    url: string;
}

interface IMeta {
    passengers: number;
    drivetrain: ("AWD" | "RWD")[];
    bodystyles: (
        | "SUV"
        | "saloon"
        | "saloon (SWB)"
        | "saloon (LWB)"
        | "COUPÉ"
        | "CONVERTIBLE"
    )[];
    emissions: IEmissions;
}

interface IVehicle {
    id: string;
    modelYear: string;
    apiUrl: string;
    media: IMedia[];
    description?: string;
    price?: string;
    meta?: IMeta;
}

interface IVehiclesSliceState {
    list: IVehicle[];
    activeVehicle: IVehicle | null;
    error: string;
    loadingList: boolean;
    loadingDetail: IVehicle["id"][];
}

export { IEmissions, IMedia, IMeta, IVehicle, IVehiclesSliceState };
