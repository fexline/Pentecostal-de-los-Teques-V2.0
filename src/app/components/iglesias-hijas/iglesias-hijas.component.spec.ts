import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IglesiasHijasComponent } from './iglesias-hijas.component';

describe('IglesiasHijasComponent', () => {
  let component: IglesiasHijasComponent;
  let fixture: ComponentFixture<IglesiasHijasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiasHijasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IglesiasHijasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
