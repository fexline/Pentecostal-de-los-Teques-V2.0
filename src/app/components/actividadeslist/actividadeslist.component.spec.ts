import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadeslistComponent } from './actividadeslist.component';

describe('ActividadeslistComponent', () => {
  let component: ActividadeslistComponent;
  let fixture: ComponentFixture<ActividadeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
