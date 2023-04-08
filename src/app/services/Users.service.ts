import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

import { Observable, throwError } from "rxjs";
import { catchError,  } from 'rxjs/operators';
import { Response } from '../models/response';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	headers = new HttpHeaders({
		'Content-Type': 'application/json'
	});

	constructor(private http: HttpClient) {
	}

	getAllUsers(): Observable<User[]> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User[]>(`${urlAPI}/api/users`, {
			headers: this.headers
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	getDrivers(): Observable<User[]> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User[]>(`${urlAPI}/api/users?type=driver`, {
			headers: this.headers
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	getOwners(): Observable<User[]> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User[]>(`${urlAPI}/api/users?type=owner`, {
			headers: this.headers
		}).pipe(
			catchError(this.errorHandler)
		);
	}

	getUserById(id: any): Observable<User> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User>(`${urlAPI}/api/users/${id}`, {
			headers: this.headers
		}).pipe(
			
			catchError(this.errorHandler)
		);
	}

	saveUser(car: User) {
		const urlAPI = environment.ApiUrl;
		return this.http.post<any>(`${urlAPI}/api/users`, car, {
			headers: this.headers
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	updateUser(car: User, id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.put<any>(`${urlAPI}/api/users/${id}`, car, {
			headers: this.headers
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	deleteUser(id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.delete<Response>(`${urlAPI}/api/users/${id}`, {
			headers: this.headers
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	errorHandler(error: any) {
		let errorMessage = '';
		let messageAlert = '';
		if(error.error instanceof ErrorEvent) {
			// Get client-side error
			messageAlert = error.error.message;
			errorMessage = error.message;
		} else {
			// Get server-side error
			let arrayErrors = error.error?.errors ? error.error?.errors : {};
			let arrayErrorsKeys = Object.keys(arrayErrors);
		  	if(arrayErrorsKeys.length > 0) {
				messageAlert = '<ul class="d-flex flex-column justify-content-center align-items-center text-center">';
				arrayErrorsKeys.forEach((item: any) => {
					messageAlert += `<li class="text-danger">${error.error?.errors[item]}</li>`;
				})
				messageAlert += '</ul>'
			} else {
				errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
			}
			errorMessage = error.message;
		}
		
		Swal.fire({
            icon: "error",
            title: "Ha ocurrido un error!",
			html: messageAlert,
        })
		return throwError(errorMessage);
	}

}
