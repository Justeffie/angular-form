import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormService} from "../form.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('white', {static:true}) white: ElementRef;
  show: boolean;

  constructor(private renderer: Renderer2, private formService: FormService) { }

  ngOnInit() {
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
