import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TracksRoutingModule } from './tracks-routing.module'

import { TracksComponent } from './pages/tracks/tracks.component'

import { ComponentsModule } from '@shared/components/components.module'

@NgModule({
	declarations: [TracksComponent],
	imports: [CommonModule, TracksRoutingModule, ComponentsModule],
})
export class TracksModule {}
