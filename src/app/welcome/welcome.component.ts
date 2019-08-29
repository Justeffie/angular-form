import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from "../form.service";
import{ActivatedRoute} from "@angular/router";
import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    state,
  } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('routeAnimations', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in'))
    ]) // close the array after the transition
]
})
export class WelcomeComponent implements OnInit {
  @ViewChild('white', {static:true}) white: ElementRef;
  show: boolean;

  constructor(private renderer: Renderer2, private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (window.location.pathname === "/signup") {
      if (this.white.nativeElement.classList.contains('white-left')) {
        this.renderer.removeClass(this.white.nativeElement,'white-left');
        this.renderer.addClass(this.white.nativeElement, 'white-right');
        this.formService.toggleForms(false, true);
        this.show= false;

      }
    }
    console.log(window.location.pathname);
  }

  toggleForms() {
   if (this.white.nativeElement.classList.contains('white-left')) {
     this.renderer.removeClass(this.white.nativeElement,'white-left');
     this.renderer.addClass(this.white.nativeElement, 'white-right');
     this.formService.toggleForms(false, true);
     this.show= false;

   } else {
     this.renderer.removeClass(this.white.nativeElement,'white-right');
     this.renderer.addClass(this.white.nativeElement, 'white-left');
     this.formService.toggleForms(true, false);
     this.show= true;
   }
  }
}
