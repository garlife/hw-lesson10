import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectComponent } from './my-project.component';



@NgModule({
  declarations: [MyProjectComponent],
  imports: [
    CommonModule
  ],
  exports: [MyProjectComponent]
})
export class MyProjectModule { }
