import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from '../form.service';
import { RouterOutlet} from '@angular/router';
import {routerTransition} from '../route-animations';
import {Location} from '@angular/common';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [routerTransition]
})
export class WelcomeComponent implements OnInit {
  @ViewChild('white', {static: true}) white: ElementRef;
  show: boolean;

  constructor(private renderer: Renderer2, private location: Location) { }

  ngOnInit() {
    this.resolveComponent(this.location.path());
  }

  getState(outlet: RouterOutlet) {
    this.resolveComponent(outlet.activatedRouteData.state)
    return outlet.activatedRouteData.state;
  }
  private resolveComponent(url) {
    if (url === '/signup' || url === 'signup') {
      if (this.white.nativeElement.classList.contains('white-left')) {
        this.renderer.removeClass(this.white.nativeElement, 'white-left');
        this.renderer.addClass(this.white.nativeElement, 'white-right');
        this.show = false;
      }
    } else if (url === '/login' || url === 'login') {
      if (this.white.nativeElement.classList.contains('white-right')) {
        this.renderer.removeClass(this.white.nativeElement, 'white-right');
        this.renderer.addClass(this.white.nativeElement, 'white-left');
        this.show = true;
      }
    }
    }
}
