import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirtualListPage } from './virtual-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataApiService } from 'src/app/core/services/data/api/data.api.service';
import { DebugElement } from '@angular/core';

describe('VirtualListPage', () => {
  let component: VirtualListPage;
  let fixture: ComponentFixture<VirtualListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualListPage ],
      imports: [IonicModule.forRoot(), SharedModule],
      providers: [DataApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('initialize page with element', () => {
    fixture.detectChanges();
    expect(component.dataList.length).toBeGreaterThan(0);
  });
});
