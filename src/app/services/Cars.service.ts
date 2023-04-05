import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
	providedIn: 'root'
})
export class CarsService {

	constructor(private http: HttpClient) { }


	getCars() {
		const urlAPI = environment.ApiUrl;
		return this.http.get(`${urlAPI}/api/cars`);
	}

	getCarById(id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.get(`${urlAPI}/api/cars/${id}`);
	}

	saveCar(car:  Car) {
		const urlAPI = environment.ApiUrl;
		return this.http.post(`${urlAPI}/api/cars`, car);
	}

	updateCar(car:  Car) {
		const urlAPI = environment.ApiUrl;
		return this.http.put(`${urlAPI}/api/cars`, car);
	}

	deleteCar(id:  any) {
		const urlAPI = environment.ApiUrl;
		return this.http.delete(`${urlAPI}/api/cars/${id}/delete`);
	}

}
