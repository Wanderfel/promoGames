import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasCrudComponent } from './lojas-crud.component';

describe('LojasCrudComponent', () => {
  let component: LojasCrudComponent;
  let fixture: ComponentFixture<LojasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
