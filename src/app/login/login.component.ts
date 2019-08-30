import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {FormService} from "../form.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() showLogin: boolean;
  @ViewChild('login', {static: true}) login: ElementRef;
  formSubscription: Subscription;
  show: boolean;

  constructor(private renderer: Renderer2, private formServce: FormService) { }

  ngOnInit() {
    this.initForm();
    this.formSubscription = this.formServce.showSignup.subscribe(show => {
      this.show = show;
      if (show){
        this.renderer.addClass(this.login.nativeElement, 'translate');
      } else {
        this.renderer.removeClass(this.login.nativeElement, 'translate');
      }
    })
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
