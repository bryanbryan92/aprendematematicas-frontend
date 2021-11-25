import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariobeComponent } from './usuariobe.component';

describe('UsuariobeComponent', () => {
  let component: UsuariobeComponent;
  let fixture: ComponentFixture<UsuariobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
