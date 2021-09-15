import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasReadComponent } from './categorias-read.component';

describe('CategoriasReadComponent', () => {
  let component: CategoriasReadComponent;
  let fixture: ComponentFixture<CategoriasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
