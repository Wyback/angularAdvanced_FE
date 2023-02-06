import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective implements AfterViewInit {

    @Input() color = 'yellow'

    constructor(private el: ElementRef,
                private renderer: Renderer2) {
    }

    ngAfterViewInit(): void {
        this.setBackground(this.color)
    }

    setBackground(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color)  
    }

    @HostListener('mousseenter') 
    onMouseEnter() {
        this.setBackground('lightgreen')
    }

    @HostListener('mouseleave') 
    onMouseLeave() {
        this.setBackground(this.color)
    }

    @HostListener('click') 
    onClick() {
        this.color = 'lightgreen';
    }
}