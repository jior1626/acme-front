import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/Users.service';

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
		this.userServices.getDrivers().subscribe((results: User[]) => {
			this.users = results;
		});
	}

	editUser(item: User) {
		this.editUserEvent.emit(item);
	}

}
