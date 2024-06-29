import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';

const routes: Routes = [
  {
    path: '',
    component: DialogOverviewComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailogRoutingModule {}
