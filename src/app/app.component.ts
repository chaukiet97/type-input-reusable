import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'type-input-reusable';
  form: FormGroup
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    // this.form.setValue({ email: "", password: "" });
  }
  getValueComponent(event) {
    if (event.email && event.email.length > 0 && event.email != null && event.email != undefined) {
      this.form.patchValue({ email: event.email,emitEvent:false})
    } else if (event.password && event.password.length > 0 && event.password != null && event.password != undefined) {
      this.form.patchValue({ password: event.password ,emitEvent:false})
    }
  }
  submitForm() {
    console.log(this.form.value);

  }
}
