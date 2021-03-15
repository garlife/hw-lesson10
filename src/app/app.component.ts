import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from "@angular/common"

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
  

  constructor(public router: Router, private location: Location) {
    // как получить историю
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(async ({ urlAfterRedirects }: NavigationEnd) => {
      console.log(urlAfterRedirects);
    });
  }

  
    // navigateTo(url) {
    //     this.location.go(url);
    // }    
    goBack() {
        this.location.back();
    }
    goForward() {
        this.location.forward();
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

 
}
