import { Car } from "./car";

export interface User {
    id?: string;
    nit?: string;
    firstname?: string;
    lastname?: string;
    surnames?: string;
    address?: string;
    phone?: string;
    city?: string;
    type?: string;
    owner_cars?: Car[];
    driver_cars?: Car[];
    created_at?: string;
    updated_at?: string;
}