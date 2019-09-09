import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})

export class RoundedDirective  implements OnInit {

  @Input() appRounded: string;

  constructor( 

    private elmRef: ElementRef, 

    private renderer: Renderer2

    ) {}

  ngOnInit() {

    let roundVal = `${this.appRounded}`;

    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
    
  }
}
