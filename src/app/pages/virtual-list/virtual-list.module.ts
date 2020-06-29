import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualListPageRoutingModule } from './virtual-list-routing.module';

import { VirtualListPage } from './virtual-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualListPageRoutingModule,
    SharedModule
  ],
  declarations: [VirtualListPage]
})
export class VirtualListPageModule {}
