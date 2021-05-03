export interface IRating {
    average: number;
    reviews: number;
}

export interface IBudget {
    price: number;
    timeInMinutes: number;
}

export interface ITime {
    available: boolean;
    hour: string;
}

export interface ISchedule {
    date: string;
    times: Array<ITime>;
}

export interface IProvider {
    fullName: string;
    about: string;
    avatarUrl: string;
    location: string;
    specialty: string;
    rating: IRating;
    budget: IBudget;
    schedule: Array<ISchedule>;
}
