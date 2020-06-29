import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataDetailsComponent } from './data-details.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DataDetailsComponent', () => {
  let component: DataDetailsComponent;
  let fixture: ComponentFixture<DataDetailsComponent>;
  let labelEl: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create without @Input', () => {
    component.dataModel = null;
    fixture.detectChanges();
    labelEl = fixture.debugElement.query(By.css('ion-label'));
    expect(component).toBeTruthy();
    expect(labelEl.nativeElement.textContent.trim()).toBe("ERROR CARGANDO CONTENIDO")
  });

  it('should create with @Input value', () => {
    component.dataModel = {
      id: 1,
      photo: 'https://picsum.photos/id/1/500/500.jpg',
      text: 'TEXTO DE PRUEBA'
    };
    fixture.detectChanges();
    labelEl = fixture.debugElement.query(By.css('ion-label'));
    expect(component).toBeTruthy();
    expect(labelEl.nativeElement.textContent.trim()).toBe("TEXTO DE PRUEBA")
  });

});
