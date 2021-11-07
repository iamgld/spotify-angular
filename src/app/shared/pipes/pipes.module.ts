import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { OrderlistPipe } from './orderlist/orderlist.pipe'

const pipes = [OrderlistPipe]

@NgModule({
	declarations: [...pipes],
	imports: [CommonModule],
	exports: [...pipes],
})
export class PipesModule {}
