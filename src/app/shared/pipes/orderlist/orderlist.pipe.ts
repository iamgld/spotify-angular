import { Pipe, PipeTransform } from '@angular/core'

import { TrackModel } from '@core/models/tracks.model'

@Pipe({
	name: 'orderlist',
})
export class OrderlistPipe implements PipeTransform {
	transform(value: any[], title: string | null = null, sort: string | null = 'asc'): TrackModel[] {
		if (title === null) {
			return value
		} else {
			const tmpList = value.sort((a, b) => {
				if (a[title] < b[title]) {
					return -1
				} else if (a[title] === b[title]) {
					return 0
				} else if (a[title] > b[title]) {
					return 1
				}
				return 1
			})

			return sort === 'asc' ? tmpList : tmpList.reverse()
		}
	}
}
