import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoinFaqComponent } from './about-coin-faq.component';

describe('AboutCoinFaqComponent', () => {
  let component: AboutCoinFaqComponent;
  let fixture: ComponentFixture<AboutCoinFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCoinFaqComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoinFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
