import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDetailsComponent } from './components/data-details/data-details.component';
import { FilterPipe } from './pipes/filter/filter.pipe';



@NgModule({
  declarations: [
    DataDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DataDetailsComponent,
    FilterPipe
  ]
})
export class SharedModule { }
