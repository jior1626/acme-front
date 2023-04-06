import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/Users.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-form-users',
	templateUrl: './form-users.component.html',
	styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {

	userForm: FormGroup;
	formSubmit = false;
	actionForm: number = 1;
	protected userId: any;
	showOwner: boolean = false;
	arrayCars: Car[] = [];

	@Input()
	set user(data: User) {
		if (data != undefined && data != null) {
			this.userId = data.id;
			this.actionForm = (data.id != null || data.id != undefined) ? 2 : 1;
			this.userForm.patchValue({
				nit: data.nit,
				firstname: data.firstname,
				lastname: data.lastname,
				surnames: data.surnames,
				address: data.address,
				phone: data.phone,
				city: data.city,
				type: data.type,
			})
			this.formSubmit = false;
			if(data.type == "owner") {
				this.showOwner = true;
				this.arrayCars = [];
				this.arrayCars = data.owner_cars ? data.owner_cars : [];
			} else{
				this.arrayCars = [];
				this.showOwner = false;
			}
			// console.log("console", data);
			
		}
	}

	@Input()
	set showForm(show: boolean) {
		if(!show) {
			this.onReset();
		}
	}

	@Output() loadUsers = new EventEmitter();

	constructor(
		public fb: FormBuilder,
		private userServices: UsersService
	) {

		this.userForm = new FormGroup({
			nit:  new FormControl('', [Validators.required, Validators.maxLength(12)]),
			firstname: new FormControl('', Validators.required),
			lastname: new FormControl(''),
			surnames: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
			city: new FormControl('', Validators.required),
			type: new FormControl('', Validators.required),
			registration: new FormControl(''),
			brand: new FormControl(''),
			color: new FormControl(''),
			type_car: new FormControl('')
		});
		
	}

	ngOnInit(): void {
	}

	get f(): { [key: string]: AbstractControl } {
		return this.userForm.controls;
	}

	showAlert(type: any, title: string, message: string) {
        Swal.fire({
            icon: type,
            title: title,
            text: message,
        })
    }

	onFormSubmit() {

		let data = this.userForm.value;
		this.formSubmit = true;

		if (this.userForm.invalid) {
			this.showAlert('error', 'Oopps', 'Hay campos vacios')
			return;
		}

		if(this.f["type"].value == "owner") {
			data = {...data, 
				cars: this.arrayCars
			}
		}

		console.log("data", data);
		
		
		// if(this.actionForm == 1) {
		// 	this.userServices.saveUser(data).subscribe((response: Response) => {
		// 		this.showAlert('success', 'Correcto', 'Información Guardada correctamente');
		// 		this.showForm = false;
		// 	});
		// } else {
		// 	this.userServices.updateUser(data, this.userId).subscribe((response: Response) => {
		// 		this.showAlert('success', 'Correcto', 'Información Actualizada correctamente');
		// 		this.showForm = false;	
		// 	});
		// }

		// this.onReset();
		
	}

	onReset(): void {
		this.formSubmit = false;
		this.userForm.reset();
		this.actionForm == 1;
	}

	clearInputsAddCars(): void {
		this.f["registration"].setValue("");
		this.f["color"].setValue("");
		this.f["brand"].setValue("");
		this.f["type_car"].setValue("");
	}

	changeType(e: any) {
		if(e.target.value == "owner") {
			this.showOwner = true;
		} else {
			this.showOwner = false;
		}
	}

	addCarToArray() {
		
		let registration = this.f["registration"].value;
		let color = this.f["color"].value;
		let brand = this.f["brand"].value;
		let typeCar = this.f["type_car"].value;

		let itemFind = this.arrayCars.find(item => item.registration == registration);

		if(itemFind) {
			this.showAlert("error", "Oppps...", "Ya existe un vehiculo con esta matricula!");
			this.clearInputsAddCars();
			return
		}

		this.arrayCars.push({
			registration: registration,
			color: color,
			brand: brand,
			type: typeCar
		})

		this.clearInputsAddCars();
	}

}
