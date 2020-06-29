import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualListPage } from './virtual-list.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualListPageRoutingModule {}
