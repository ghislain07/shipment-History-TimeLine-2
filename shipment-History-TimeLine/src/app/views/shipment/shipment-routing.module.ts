import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentHistoryModule } from './views/shipment-history/shipment-history.module';
import { FullShipmentHistoryComponent } from './views/shipment-history/shipment-history/full-shipment-history/full-shipment-history.component';
import { ShipmentComponent } from './shipment.component';

const routes: Routes = [
  {
    path: '',
    component: ShipmentComponent,
    children: [
      {
        path: 'full-shipment',
        component: FullShipmentHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ShipmentHistoryModule],
  exports: [RouterModule],
})
export class ShipmentRoutingModule {}
