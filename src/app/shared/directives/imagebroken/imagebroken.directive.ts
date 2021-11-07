import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
	selector: 'img[appImagebroken]',
})
export class ImagebrokenDirective {
	@Input() customImg: string = 'https://via.placeholder.com/250'
	@HostListener('error') handleError(): void {
		const native = this.host.nativeElement
		console.log('🔴 Esta imagen revento -->', this.host)
		native.src = this.customImg
	}

	constructor(private host: ElementRef) {}
}
