import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../form.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  formSubscription: Subscription;
  @ViewChild('signup', {static: true}) signup: ElementRef;

  constructor(private formServce: FormService, private renderer: Renderer2) { }

  ngOnInit() {
    this.initForm();
    
    this.formSubscription = this.formServce.showSignup.subscribe(show => {
      if (show){
        this.renderer.addClass(this.signup.nativeElement, 'translate');
      } else {
        this.renderer.removeClass(this.signup.nativeElement, 'translate');
      }
    })
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
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
    if (this.formulario.get(inputName).value != event.target.value) {
      this.formulario.get('pass').setErrors( {'passwordNotEqual': true});
    } else {
      this.formulario.get('pass').setErrors(null);
    }
  }


}
