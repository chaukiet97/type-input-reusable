import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const MODULE=[
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  TextFieldModule,
  ScrollingModule,
  MatDialogModule,
  MatSnackBarModule,
  MatChipsModule,
  MatProgressSpinnerModule,

]

@NgModule({
  declarations: [],
  imports: [
    ...MODULE
  ],
  exports:[
    ...MODULE
  ]
})
export class MaterialModule { }
