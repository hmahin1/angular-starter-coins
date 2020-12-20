import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoinFaqComponent } from './get-coin-faq.component';

describe('GetCoinFaqComponent', () => {
  let component: GetCoinFaqComponent;
  let fixture: ComponentFixture<GetCoinFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetCoinFaqComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCoinFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
