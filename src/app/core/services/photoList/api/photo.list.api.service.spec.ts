import { TestBed } from '@angular/core/testing';

import { PhotoListApiService } from './photo.list.api.service';
import { Const } from 'src/app/core/config/const/const';

describe('Data.ApiService', () => {
  let service: PhotoListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoListApiService);
  });

  it('get data element with pagination', () => {
    let page: number;
    page = 1;
    let count: number;
    count = 50;
    service.get(page, count).subscribe(
      (values) => {
        expect(values.length).toBeGreaterThan(0);
      }
    );
  });

  it('get data element without pagination', () => {
    service.get().subscribe(
      (values) => {
        expect(values.length).toBeGreaterThan(0);
      }
    );
  });

  it('get data element with pagination equals -1', () => {
    let page: number;
    page = -1;
    let count: number;
    count = -1;
    service.get(page, count).subscribe(
      (values) => {
        expect(values.length).toBeGreaterThan(0);
      }
    );
  });

  it('get All data element', () => {
    service.getAll().subscribe(
      (values) => {
        expect(values.length).toEqual(Const.maxElement);
      }
    );
  });
});
