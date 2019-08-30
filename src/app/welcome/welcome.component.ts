import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from '../form.service';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
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

  constructor(private renderer: Renderer2, private formService: FormService, private route: ActivatedRoute, private location: Location) { }

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
        this.formService.toggleForms(false, true);
        this.show = false;
      }
    } else if (url === '/login' || url === 'login') {
      if (this.white.nativeElement.classList.contains('white-right')) {
        this.renderer.removeClass(this.white.nativeElement, 'white-right');
        this.renderer.addClass(this.white.nativeElement, 'white-left');
        this.formService.toggleForms(true, false);
        this.show = true;
      }
    }
    }
}
