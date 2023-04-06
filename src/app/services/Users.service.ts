import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Response } from '../models/response';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http: HttpClient) { }


	getAllUsers(): Observable<User[]> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User[]>(`${urlAPI}/api/users`, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	getDrivers(): Observable<User[]> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User[]>(`${urlAPI}/api/users?type=driver`, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	getOwners(): Observable<User[]> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User[]>(`${urlAPI}/api/users?type=owner`, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		);
	}

	getUserById(id: any): Observable<User> {
		const urlAPI = environment.ApiUrl;
		return this.http.get<User>(`${urlAPI}/api/users/${id}`, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		);
	}

	saveUser(car: User) {
		const urlAPI = environment.ApiUrl;
		return this.http.post<Response>(`${urlAPI}/api/users`, car, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	updateUser(car: User, id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.put<Response>(`${urlAPI}/api/users/${id}`, car, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	deleteUser(id: any) {
		const urlAPI = environment.ApiUrl;
		return this.http.delete<Response>(`${urlAPI}/api/users/${id}/delete`, {
			headers: new HttpHeaders({
			  'Content-Type': 'application/json'
			})
		}).pipe(
			catchError(this.errorHandler)
		)
	}

	errorHandler(error: any) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
		  // Get client-side error
		  errorMessage = error.error.message;
		} else {
		  // Get server-side error
		  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	}

}
