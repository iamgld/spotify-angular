import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PipesModule } from '@shared/pipes/pipes.module'
import { DirectivesModule } from '@shared/directives/directives.module'

import { SidebarComponent } from './sidebar/sidebar.component'
import { MediaplayerComponent } from './mediaplayer/mediaplayer.component'
import { HeaderComponent } from './header/header.component'
import { CardplayerComponent } from './cardplayer/cardplayer.component'
import { SectiongenericComponent } from './sectiongeneric/sectiongeneric.component'
import { PlaylistheaderComponent } from './playlistheader/playlistheader.component'
import { PlaylistbodyComponent } from './playlistbody/playlistbody.component'

const components = [
	SidebarComponent,
	MediaplayerComponent,
	HeaderComponent,
	CardplayerComponent,
	SectiongenericComponent,
	PlaylistheaderComponent,
	PlaylistbodyComponent,
]

@NgModule({
	declarations: [...components],
	imports: [CommonModule, RouterModule, PipesModule, DirectivesModule],
	exports: [...components],
})
export class ComponentsModule {}
