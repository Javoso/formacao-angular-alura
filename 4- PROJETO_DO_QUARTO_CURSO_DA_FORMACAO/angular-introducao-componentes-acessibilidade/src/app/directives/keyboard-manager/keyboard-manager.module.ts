import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagerItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  declarations:[KeyboardManagerDirective, KeyboardManagerItemDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective, KeyboardManagerItemDirective]
})
export class KeyboardManagerModule {

}
