import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranscationType } from 'src/app/entities/enums';
import { ICustomer, IInvest } from 'src/app/entities/interfaces';
import { AccountManagerService } from 'src/app/services/account-manager.service';

@Component({
  selector: 'app-invest-modal',
  templateUrl: './invest-modal.component.html',
  styleUrls: ['./invest-modal.component.scss']
})


export class InvestModalComponent {

  @Input('customer') customer?: ICustomer;

  formInvest: FormGroup = this.formBuilder.group({
      cuenta: [undefined, Validators.required],
      cantidad: [undefined, Validators.required],
      tasa: [undefined, Validators.required]
    });

    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,  private accountService: AccountManagerService){}

    invertir(){
      const cuenta = this.formInvest.get('cuenta')?.value;
      const cantidad = this.formInvest.get('cantidad')?.value;
      const porcentaje = this.formInvest.get('tasa')?.value;

      this.accountService.invertir(this.customer!, cuenta, cantidad).subscribe({
        next: () => {
          this.activeModal.dismiss();
        },
        error: (error) => {
          alert(error);
        }
      });
    }

}
