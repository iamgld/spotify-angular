import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Subscription } from 'rxjs'

import { MultimediaService } from '@shared/services/multimedia.service'

@Component({
	selector: 'app-mediaplayer',
	templateUrl: './mediaplayer.component.html',
	styleUrls: ['./mediaplayer.component.sass'],
})
export class MediaplayerComponent implements OnInit {
	@ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
	listObservers$: Array<Subscription> = []
	state: string = 'paused'
	constructor(public multimediaService: MultimediaService) {}

	ngOnInit(): void {
		const observer1$ = this.multimediaService.playerStatus$.subscribe((status) => (this.state = status))
		this.listObservers$ = [observer1$]
	}

	ngOnDestroy(): void {
		this.listObservers$.forEach((u) => u.unsubscribe())
		console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!')
	}

	handlePosition(event: MouseEvent): void {
		const elNative: HTMLElement = this.progressBar.nativeElement
		const { clientX } = event
		const { x, width } = elNative.getBoundingClientRect()
		const clickX = clientX - x //TODO: 1050 - x
		const percentageFromX = (clickX * 100) / width
		console.log(`Click(x): ${percentageFromX}`)
		this.multimediaService.seekAudio(percentageFromX)
	}
}
