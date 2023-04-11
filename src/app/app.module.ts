import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


// Config redux
import { CarsService } from './services/Cars.service';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { FormUsersComponent } from './components/users/form-users/form-users.component';
import { UsersComponent } from './components/users/users.component';
import { ListCarsComponent } from './components/cars/list-cars/list-cars.component';
import { FormCarsComponent } from './components/cars/form-cars/form-cars.component';
import { CarsComponent } from './components/cars/cars.component';
import { UsersService } from './services/Users.service';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    FormUsersComponent,
    UsersComponent,
    ListCarsComponent,
    FormCarsComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([CarEffect])
  ],
  providers: [
    CarsService,
    UsersService
  ],
  bootstrap: [AppComponent],
  exports: [
    ListUsersComponent,
    FormUsersComponent,
    UsersComponent,
    ListCarsComponent,
    FormCarsComponent,
    CarsComponent
  ]
})
export class AppModule { }
