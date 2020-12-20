import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaCoinsComponent } from './fifa-coins.component';

describe('FifaCoinsComponent', () => {
  let component: FifaCoinsComponent;
  let fixture: ComponentFixture<FifaCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FifaCoinsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
