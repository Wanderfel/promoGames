import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasCreateComponent } from './lojas-create.component';

describe('LojasCreateComponent', () => {
  let component: LojasCreateComponent;
  let fixture: ComponentFixture<LojasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
