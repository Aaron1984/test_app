import { FilterPipe } from './filter.pipe';
import { ItemPhoto } from 'src/app/core/models/itemPhoto/Item.photo.model';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('Apply filter with searchId', () => {
    let mockData: Array<ItemPhoto> = [];
    mockData.push({id:1, photo:'', text:'prueba1'});
    mockData.push({id:2, photo:'', text:'prueba2'});
    mockData.push({id:3, photo:'', text:'prueba3'});
    mockData.push({id:4, photo:'', text:'prueba4'});
    mockData.push({id:5, photo:'', text:'prueba5'});

    const pipe = new FilterPipe();
    expect(pipe.transform(mockData, '1', null).length).toEqual(1);
  });
});
