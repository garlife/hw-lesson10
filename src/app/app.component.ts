import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-lesson10';

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  

  constructor(public router: Router) {
    //как получить историю
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(async ({ urlAfterRedirects }: NavigationEnd) => {
      console.log(urlAfterRedirects);
    });
  }

  goToAbout() {
    this.router.navigate(['about']);
  }
  goToProject() {
    this.router.navigate(['project']);
  }
  goToMain() {
    this.router.navigate(['']);
  }

  goBack(){
   
  }
}
