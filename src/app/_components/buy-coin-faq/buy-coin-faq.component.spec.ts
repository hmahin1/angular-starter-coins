import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCoinFaqComponent } from './buy-coin-faq.component';

describe('BuyCoinFaqComponent', () => {
  let component: BuyCoinFaqComponent;
  let fixture: ComponentFixture<BuyCoinFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCoinFaqComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCoinFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
