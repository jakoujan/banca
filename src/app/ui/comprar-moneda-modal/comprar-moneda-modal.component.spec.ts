import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarMonedaModalComponent } from './comprar-moneda-modal.component';

describe('ComprarMonedaModalComponent', () => {
  let component: ComprarMonedaModalComponent;
  let fixture: ComponentFixture<ComprarMonedaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarMonedaModalComponent]
    });
    fixture = TestBed.createComponent(ComprarMonedaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
