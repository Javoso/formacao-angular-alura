import { Directive, OnChanges, SimpleChanges } from "@angular/core";
import { Input } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({ 
  selector : '[appDisableControl]'
})
export class DisableControlDirective implements OnChanges {
  @Input() appDisableControl  = false;

  constructor(private ngControl: NgControl) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.appDisableControl){
      const action = this.appDisableControl ? 'disable' : 'enable';
      this.ngControl.control[action]();
    }
  }
}

