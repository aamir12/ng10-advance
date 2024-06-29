import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other/other.component';
import { OtherRoutingModule } from './other-routing.module';



@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
