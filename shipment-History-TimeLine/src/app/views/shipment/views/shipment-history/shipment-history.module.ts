import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullShipmentHistoryComponent } from './shipment-history/full-shipment-history/full-shipment-history.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [FullShipmentHistoryComponent],
  exports: [FullShipmentHistoryComponent],
  imports: [SharedModule],
})
export class ShipmentHistoryModule {}
