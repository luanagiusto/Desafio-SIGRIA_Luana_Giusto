import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosUsuariosComponent } from './dados-usuarios.component';

describe('DadosUsuariosComponent', () => {
  let component: DadosUsuariosComponent;
  let fixture: ComponentFixture<DadosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
