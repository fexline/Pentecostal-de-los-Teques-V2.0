import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaPastoralComponent } from './familia-pastoral.component';

describe('FamiliaPastoralComponent', () => {
  let component: FamiliaPastoralComponent;
  let fixture: ComponentFixture<FamiliaPastoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaPastoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliaPastoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
