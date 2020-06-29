import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let labelEl: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    fixture.detectChanges();
    labelEl = fixture.debugElement.query(By.css('h3'));
    expect(component).toBeTruthy();
    expect(labelEl.nativeElement.textContent.trim()).toBe("Aarón Rodríguez Serrano")
  });
});
