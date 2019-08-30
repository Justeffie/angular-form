import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formulario: FormGroup;
  @ViewChild('signup', {static: true}) signup: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formulario = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'pass': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  checkInputs(inputName: string, event) {
    if (this.formulario.get(inputName).value !== event.target.value) {
      this.formulario.get('pass').setErrors( { 'passwordNotEqual': true});
    } else {
      this.formulario.get('pass').setErrors(null);
    }
  }


}
