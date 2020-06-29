import { Injectable } from '@angular/core';
import { ItemPhoto } from 'src/app/core/models/itemPhoto/Item.photo.model';
import { Observable, of } from 'rxjs';
import { Const } from 'src/app/core/config/const/const';

@Injectable({
  providedIn: 'root'
})
export class PhotoListApiService {

  constructor() { }

  public get(page?: number, count?: number): Observable<Array<ItemPhoto>>{
    return of(this.generateWithPagination(page, count));
  }

  public getAll(): Observable<Array<ItemPhoto>>{
    return of(this.generateAll());
  }

  private generateWithPagination(page?: number, count?: number){
    let resp = new Array<ItemPhoto>();
    let max: number; // Máximo de elementos en la página
    let index: number;

    // Valores por defecto, se pueden parametrizar
    page = (page === null || page === undefined || page < 1) ? Const.page : page;
    count = (count === null || count === undefined || count < 1) ? Const.count : count;
    
    // Inicializamos el indice de posicionamiento del array
    index = (page-1)*count;

    // Comprobamos que no sobrepasamos el número de elementos máximos que se pueden mostrar en total
    max = ((page * count) > Const.maxElement) ? max = Const.maxElement: (page * count);

    for(index; index<max; index++){
      let value: ItemPhoto;
      value = new ItemPhoto(index, this.generateTextRamdom(index));
      resp.push(value);
    }

    return resp;
  }

  private generateAll(){
    let resp = new Array<ItemPhoto>();

    for(let index = 0; index < Const.maxElement; index++){
      let value: ItemPhoto;
      value = new ItemPhoto(index, this.generateTextRamdom(index));
      resp.push(value);
    }

    return resp;
  }

  private generateTextRamdom(index: number): string {
    let str:string;

    switch(index%10){
      case 0:
        str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        break;
      case 1:
        str = 'Quisque in leo placerat, mollis enim ut, pharetra risus.';
        break;
      case 2:
        str = 'Praesent elementum massa sed enim maximus, pulvinar luctus nisi sodales.';
        break;
      case 3:
        str = 'Vivamus vulputate odio ac blandit mollis.';
        break;
      case 4:
        str = 'Aliquam maximus turpis et elit scelerisque pretium.';
        break;
      case 5:
        str = 'Phasellus sit amet erat dapibus, porttitor nisl eget, sodales lectus.';
        break;
      case 6:
        str = 'Aliquam sollicitudin metus vel imperdiet sollicitudin.';
        break;
      case 7:
        str = 'Nullam sodales nisl et leo dapibus, et posuere velit aliquam.';
        break;
      case 8:
        str = 'Vestibulum bibendum eros in sem condimentum, vitae efficitur nulla lobortis.';
        break;
      case 9:
        str = 'Nulla id lorem pretium, auctor quam pellentesque, porttitor sapien.';
        break;
      default:
        str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        break;
    }

    return str;
  }

}
