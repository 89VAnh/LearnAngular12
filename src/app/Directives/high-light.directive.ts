import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighLightDirective {
  @Input() appHighlight = '';

  higtlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}
}
