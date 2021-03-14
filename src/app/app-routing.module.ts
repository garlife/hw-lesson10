import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
  path: 'about',
  component: AboutMeComponent
},
{
  path: 'project',
  component: MyProjectComponent
},
{
  path: '404',
  component: Page404Component
},
{
  path: '**',
  component: Page404Component
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
