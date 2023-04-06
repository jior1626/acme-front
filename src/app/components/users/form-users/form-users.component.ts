import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/Users.service';

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

	@Input()
	set user(data: User) {
		if (data != undefined && data != null) {
			this.userId = data.id;
			this.actionForm = 2;
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
		}

		console.log("value form", this.userForm.value);
	}

	@Input()
	set showForm(show: boolean) {
		if(!show) {
			this.onReset();
		}
	}

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
		});
		
	}

	ngOnInit(): void {
		// this.userForm = this.fb.group({
		// 	nit:  ['', [Validators.required, Validators.maxLength(12)]],
		// 	firstname:  ['', Validators.required],
		// 	lastname:  ['', Validators.maxLength(20)],
		// 	surnames:  ['', Validators.required],
		// 	address:  ['', Validators.required],
		// 	phone:  ['', [Validators.required, Validators.maxLength(15)]],
		// 	city:  ['', Validators.required],
		// 	type:  ['', Validators.required],
		// })
	}

	get f(): { [key: string]: AbstractControl } {
		return this.userForm.controls;
	}

	onFormSubmit() {

		let data = this.userForm.value;
		this.formSubmit = true;

		console.log("data", data);

		if (this.userForm.invalid) {
			return;
		}
		
		if(this.actionForm == 1) {
			this.userServices.saveUser(data).subscribe((response: Response) => {
				
			});
		} else {
			this.userServices.updateUser(data, this.userId).subscribe((response: Response) => {
				
			});
		}
		
	}

	onReset(): void {
		this.formSubmit = false;
		this.userForm.reset();
	}

}
