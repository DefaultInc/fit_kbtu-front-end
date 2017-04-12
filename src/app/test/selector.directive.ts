import { Directive, ViewRef, ViewContainerRef, OnInit } from '@angular/core';
//import * as mdl from 'material-design-lite';
declare var componentHandler: any;


@Directive({
  selector: '[fpSelector]'
})
export class SelectorDirective implements OnInit {
    
    ngOnInit(): void {      
      const textarea = this.viewRef.element.nativeElement;
      componentHandler.upgradeElement(textarea);
      console.log(textarea, componentHandler);
    }


  constructor(public viewRef: ViewContainerRef) {
  }

}
