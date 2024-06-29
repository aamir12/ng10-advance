import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { DailogRoutingModule } from './dailog-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogOverviewComponent,
    Dialog1Component,
    Dialog2Component
  ],
  imports: [
    CommonModule,
    DailogRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [Dialog1Component, Dialog2Component],
})
export class DailogModule { }
