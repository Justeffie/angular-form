import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs/index";

@Injectable({providedIn: 'root'})
export class FormService {

  showLogin = new BehaviorSubject<boolean>(null);
  showSignup= new BehaviorSubject<boolean>(null);

  toggleForms(login: boolean, signup: boolean) {
    this.showLogin.next(login);
    this.showSignup.next(signup);
  }
}
