import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoUsuarioComponent } from './permiso-usuario.component';

describe('PermisoUsuarioComponent', () => {
  let component: PermisoUsuarioComponent;
  let fixture: ComponentFixture<PermisoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
