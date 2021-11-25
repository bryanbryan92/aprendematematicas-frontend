import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsuariobeComponent } from './tabla-usuariobe.component';

describe('TablaUsuariosComponent', () => {
  let component: TablaUsuariobeComponent;
  let fixture: ComponentFixture<TablaUsuariobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUsuariobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaUsuariobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
