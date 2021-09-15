import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasReadComponent } from './lojas-read.component';

describe('LojasReadComponent', () => {
  let component: LojasReadComponent;
  let fixture: ComponentFixture<LojasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
