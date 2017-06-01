import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
	selector: '[hightlight]'
})

export class 	HightlightDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';
	}
}
