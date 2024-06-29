import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dailog',
    loadChildren: () =>
      import('./modules/dailog/dailog.module').then((mod) => mod.DailogModule),
  },
  {
    path: 'other',
    loadChildren: () => import('./modules/other/other.module').then((mod) => mod.OtherModule),
  },
  { path: '', redirectTo: '/dailog', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
