import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '@modules/home/pages/home/home.component'

const routes: Routes = [
	{
		// Private
		path: '',
		component: HomeComponent,
		loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
	},
	{
		// Login, Register, Forgot...
		path: 'auth',
		loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule),
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
