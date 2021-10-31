import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TracksComponent } from './pages/tracks/tracks.component'

const routes: Routes = [
	{
		path: '',
		component: TracksComponent,
		outlet: 'home',
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TracksRoutingModule {}
