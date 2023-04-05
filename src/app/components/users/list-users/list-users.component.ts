import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/Users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private userServices: UsersService
  ) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    let data = this.userServices.getDrivers().subscribe(data => data);
    console.log("data", data)
  }

}
