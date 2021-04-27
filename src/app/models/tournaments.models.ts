export interface tournaments{
    id?:number;
    name?:string;
    series?:string;
    organizer?: string;
    game?:string;
    type?: string;
    location?:string;
    teams?:number;
    prizePool?:number;
    startDate?:Date;
    endDate?:Date;
    maps?:string[];
    participants?:string[];
}