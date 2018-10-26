import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActividadesComponent } from './crear-actividades.component';

describe('CrearActividadesComponent', () => {
  let component: CrearActividadesComponent;
  let fixture: ComponentFixture<CrearActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
