import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { ChartsRoutingModule } from './sales-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  declarations: [
    SalesDashboardComponent,
  ],
})
export class SalesModule {}