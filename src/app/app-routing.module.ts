import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent,
		// children: [
		// 	{
		// 		path: ':id/cars',
		// 		component: CarsComponent
		// 	}
		// ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
