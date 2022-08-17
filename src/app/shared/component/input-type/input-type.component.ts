import { Subscription } from 'rxjs';
import { AfterViewChecked, ChangeDetectorRef, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
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
export class InputTypeComponent implements OnInit, AfterViewChecked {
  valueInput: any
  @Input() type: string = 'text'
  @Input() tag: string = 'input'
  @Input() label: string = ''
  @Output() control = new EventEmitter<any>();
  isEmail: boolean = false
  isShowPassword: boolean = false
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onGetValueInput(value) {
    switch (this.type) {
      case 'email':
        this.getErrorMessage(value)
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
  getErrorMessage(email) {
    this.isEmail = true
    let regex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
    if (email.length > 0) {
      if (!regex.test(email)) {
        return 'Địa chỉ email không đúng định dạng'
      }
      this.isEmail = false
    } else {
      return 'Vui lòng nhập địa chị email'
    }
    return ''
  }
  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }
}
