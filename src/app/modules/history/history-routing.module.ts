import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HistoryComponent } from './pages/history/history.component'

const routes: Routes = [
	{
		path: '',
		component: HistoryComponent,
		outlet: 'home',
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HistoryRoutingModule {}
