import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http: HttpClient) { }

	getDrivers() {
		const urlAPI = environment.ApiUrl;
		return this.http.get(`${urlAPI}/api/users?type=drivers`);
	}

	getOwners() {
		const urlAPI = environment.ApiUrl;
		return this.http.get(`${urlAPI}/api/users?type=owners`);
	}

	getUserById(id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.get(`${urlAPI}/api/users/${id}`);
	}

	saveUser(car: User) {
		const urlAPI = environment.ApiUrl;
		return this.http.post(`${urlAPI}/api/users`, car);
	}

	updateUser(car: User) {
		const urlAPI = environment.ApiUrl;
		return this.http.put(`${urlAPI}/api/users`, car);
	}

	deleteUser(id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.delete(`${urlAPI}/api/users/${id}/delete`);
	}

}
