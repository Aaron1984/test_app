import { Pipe, PipeTransform } from '@angular/core';
import { ItemPhoto } from 'src/app/core/models/itemPhoto/Item.photo.model';

@Pipe({
  name: 'filterData'
})
export class FilterPipe implements PipeTransform {

  transform(listData: Array<ItemPhoto>, searchId?:string, searchText?: string ):  Array<ItemPhoto> {
    let auxList: Array<ItemPhoto>;
    if(!searchText && !searchId){
      return listData;
    }
    else{
      
      if(searchId)
      {
        let parseNumber = Number.parseInt(searchId);
        auxList = listData.filter((value)=>{
          return value.id == parseNumber
        })
      }
      else{
        auxList = [...listData];
      }
      if(searchText)
      {
        auxList = auxList.filter((value)=>{
          return value.text.includes(searchText)
        })
      }
    }
    return auxList;
  }

}
