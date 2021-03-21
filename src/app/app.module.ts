import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeModule } from './about-me/about-me.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { MyProjectModule } from './my-project/my-project.module';
import { Page404Module } from './page404/page404.module';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AboutMeModule,
    MyProjectModule,
    MainPageModule,
    Page404Module,
    NgbModule,
    AppRoutingModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
