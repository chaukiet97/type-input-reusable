import { Subscription } from 'rxjs';
import { OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-type',
  templateUrl: './input-type.component.html',
  styleUrls: ['./input-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTypeComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputTypeComponent
    },
  ]
})
export class InputTypeComponent implements OnInit {
  valueInput: any
  @Input() type: string = 'text'
  @Input() tag: string = 'input'
  @Output() control = new EventEmitter<any>();
  isEmail: boolean = false
  isShowPassword: boolean = false
  constructor() {
  }

  ngOnInit(): void {
  }

  onGetValueInput(value) {
    switch (this.type) {
      case 'email':
        this.control.emit({ 'email': value || '' })
        break;
      case 'password':
        this.control.emit({ "password": value || '' })
        break;
      default:
        this.control.emit(value)
        break;
    }
  }
}
