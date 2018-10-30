import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBannerComponent } from './crear-banner.component';

describe('CrearBannerComponent', () => {
  let component: CrearBannerComponent;
  let fixture: ComponentFixture<CrearBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
