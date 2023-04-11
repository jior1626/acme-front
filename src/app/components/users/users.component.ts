import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  showForm: boolean = false;
  userData: User = {};

  constructor() { }

  ngOnInit() {
  }

  // loadUsers(event: any) {
  //   this.showForm = false;
  // }

  editUser(data: User) {
    this.userData = data;
    this.showForm = true;
  }

  createUser() {
    this.userData = {};
    this.showForm = true;
  }

  listUsers() {
    this.userData = {};
    this.showForm = false;
  }

}
