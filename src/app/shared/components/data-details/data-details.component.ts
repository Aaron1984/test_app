import { Component, Input } from '@angular/core';
import { ItemPhoto } from 'src/app/core/models/itemPhoto/Item.photo.model';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.scss'],
})
export class DataDetailsComponent {

  @Input()
  dataModel: ItemPhoto;

}
