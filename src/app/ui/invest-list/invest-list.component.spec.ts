import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestListComponent } from './invest-list.component';

describe('InvestListComponent', () => {
  let component: InvestListComponent;
  let fixture: ComponentFixture<InvestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestListComponent]
    });
    fixture = TestBed.createComponent(InvestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
