import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { home } from 'src/app/admin/home/home.component';
import { HomeComponent } from 'src/app/admin/dashboard/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
