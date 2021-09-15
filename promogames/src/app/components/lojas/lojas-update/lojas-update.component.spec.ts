import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasUpdateComponent } from './lojas-update.component';

describe('LojasUpdateComponent', () => {
  let component: LojasUpdateComponent;
  let fixture: ComponentFixture<LojasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
