import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { SalesDashboardComponent } from 'src/app/admin/sales/sales-dashboard/sales-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SalesDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {}