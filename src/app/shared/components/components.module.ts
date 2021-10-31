import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SidebarComponent } from './sidebar/sidebar.component'
import { MediaplayerComponent } from './mediaplayer/mediaplayer.component'
import { HeaderComponent } from './header/header.component'
import { CardplayerComponent } from './cardplayer/cardplayer.component'
import { SectiongenericComponent } from './sectiongeneric/sectiongeneric.component'

const components = [SidebarComponent, MediaplayerComponent, HeaderComponent, CardplayerComponent, SectiongenericComponent]

@NgModule({
	declarations: [...components],
	imports: [CommonModule],
	exports: [...components],
})
export class ComponentsModule {}
