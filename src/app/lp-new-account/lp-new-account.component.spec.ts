import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpNewAccountComponent } from './lp-new-account.component';

describe('LpNewAccountComponent', () => {
  let component: LpNewAccountComponent;
  let fixture: ComponentFixture<LpNewAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpNewAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
