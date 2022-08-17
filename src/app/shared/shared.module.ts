import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTypeComponent } from './component/input-type/input-type.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENT = [
  InputTypeComponent
]
const MODULE=[
  RouterModule,
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
]

@NgModule({
  declarations: [
    ...COMPONENT,
  ],
  imports: [
    ...MODULE
  ],
  exports: [
    ...COMPONENT,...MODULE
  ]
})
export class SharedModule { }
