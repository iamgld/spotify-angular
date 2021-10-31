import { Component, Input, OnInit } from '@angular/core'
import { TrackModel } from '@core/models/tracks.model'

@Component({
	selector: 'app-sectiongeneric',
	templateUrl: './sectiongeneric.component.html',
	styleUrls: ['./sectiongeneric.component.sass'],
})
export class SectiongenericComponent implements OnInit {
	@Input() title: string = ''
	@Input() mode: 'small' | 'big' = 'big'
	@Input() dataTracks: Array<TrackModel> = []

	constructor() {}

	ngOnInit(): void {}
}
