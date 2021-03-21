import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';



@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule
  ],
  exports: [MaterialsComponent]
})
export class MaterialsModule { }
