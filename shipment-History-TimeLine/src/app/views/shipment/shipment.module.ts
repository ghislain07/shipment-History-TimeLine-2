import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment.component';

@NgModule({
  declarations: [ShipmentComponent],
  exports: [ShipmentComponent],
  imports: [SharedModule, ShipmentRoutingModule],
})
export class ShipmentModule {}
