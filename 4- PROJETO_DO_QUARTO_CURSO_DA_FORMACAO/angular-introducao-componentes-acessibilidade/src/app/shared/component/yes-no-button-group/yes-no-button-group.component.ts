import { Component, OnInit, Input, Output, EventEmitter, forwardRef,} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 *
 *
 * @export
 * @class YesNoButtonGroupComponent
 * @implements {OnInit}
 * @implements {ControlValueAccessor}
 */
@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef( () => YesNoButtonGroupComponent),
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string)=>{}
  public onTouched = ()=>{}

  ngOnInit(): void {}

  constructor() {}

  public activate(value: string): void {
    this.writeValue(value);
  }

  public writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
