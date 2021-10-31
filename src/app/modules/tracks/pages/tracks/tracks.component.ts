import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { TrackModel } from '@core/models/tracks.model'
// import { TrackService } from '@modules/tracks/services/track.service'

import * as dataRaw from '../../../../data/tracks.json'

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: ['./tracks.component.sass'],
})
export class TracksComponent implements OnInit {
	tracksTrending: Array<TrackModel> = []
	tracksRandom: Array<TrackModel> = []
	listObservers$: Array<Subscription> = []
	mockTrackList: TrackModel[] = []

	// constructor(private trackService: TrackService) {}
	constructor() {}

	ngOnInit(): void {
		const { data }: any = (dataRaw as any).default
		this.mockTrackList = data
		this.loadDataAll() //TODO 📌📌
		this.loadDataRandom() //TODO 📌📌
	}

	async loadDataAll(): Promise<any> {
		// this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
	}

	loadDataRandom(): void {
		// this.trackService.getAllRandom$().subscribe((response: TrackModel[]) => {
		// 	this.tracksRandom = response
		// })
	}

	ngOnDestroy(): void {}
}
