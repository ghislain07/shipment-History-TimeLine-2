import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shipment',
    pathMatch: 'full',
  },
  {
    path: 'shipment',
    loadChildren: () =>
      import('./views/shipment/shipment.module').then((m) => m.ShipmentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
