import { Component, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ICustomer } from 'src/app/entities/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FastForexService } from 'src/app/services/fast-forex.service';
import { AccountManagerService } from 'src/app/services/account-manager.service'; 
import { TranscationType } from 'src/app/entities/enums';
import { ITransaction } from 'src/app/entities/interfaces';

@Component({
  selector: 'app-comprar-moneda-modal',
  templateUrl: './comprar-moneda-modal.component.html',
  styleUrls: ['./comprar-moneda-modal.component.scss']
})
export class ComprarMonedaModalComponent {

  @Input('customer') customer?: ICustomer;

  formDivisa: FormGroup = this.formBuilder.group({
    fromCuenta: [undefined, Validators.required],
    USDCuenta: [undefined, Validators.required],
    amount: [undefined, Validators.required]

  })
  results: any[]=[];
  cant?: number=0;

  constructor(public ActiveModal: NgbActiveModal, private formBuilder: FormBuilder, private fastForexService: FastForexService, private accountServices: AccountManagerService){}

  comprarDivisa(){
    const cuenta = this.formDivisa.get('fromCuenta')?.value;
    const amount = this.formDivisa.get('amount')?.value;
    const USDC = this.formDivisa.get('USDCuenta')?.value;
    this.results = [];
    
    this.fastForexService.getExchangeRate('USD','MXN').subscribe((data: any) => {
      const currencie = data.result['MXN'];
      const total = currencie * amount;
      console.log(currencie);
      
      this.accountServices.addTransaction(cuenta, total,TranscationType.TRANSFER).subscribe({
        next: (fam) => {
          this.accountServices.addTransaction(USDC, amount, TranscationType.DEPOSIT).subscribe({
            next: (tam) => {
              this.customer!.accounts = [fam, tam];
              console.log(this.customer);
              this.ActiveModal.dismiss();
            },
            error: (err) => {
              alert(err);
            },
          });
        },
        error:(err) => {
          alert(err);
        },
      });

    });
  } 
}
