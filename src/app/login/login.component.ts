import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';
import {FormService} from '../form.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() showLogin: boolean;
  @ViewChild('login', {static: true}) login: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSumbit() {
    console.log(this.form.value);
  }
}
