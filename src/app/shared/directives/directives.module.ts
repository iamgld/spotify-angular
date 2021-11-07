import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ImagebrokenDirective } from './imagebroken/imagebroken.directive'

const directives = [ImagebrokenDirective]

@NgModule({
	declarations: [...directives],
	imports: [CommonModule],
	exports: [...directives],
})
export class DirectivesModule {}
