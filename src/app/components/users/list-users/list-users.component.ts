import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/Users.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-list-users',
	templateUrl: './list-users.component.html',
	styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

	users: User[] = [];

	@Output() editUserEvent = new EventEmitter();

	constructor(
		private userServices: UsersService
	) { }

	ngOnInit() {
		this.listUsers();
	}

	listUsers() {
		this.userServices.getAllUsers().subscribe((results: User[]) => {
			this.users = results;
		});
	}

	editUser(item: User) {
		this.editUserEvent.emit(item);
	}

	deleteUser(item: User) {
		Swal.fire({
            title: 'Estas seguro de borrar este usuario?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Borrar Registro',
            allowOutsideClick: false,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
				this.userServices.deleteUser(item.id).subscribe((results: Response) => {
					Swal.fire('Borrado Correctamente!', results.message, 'success');
					this.listUsers();
				});
            }
        })
	}	

}
