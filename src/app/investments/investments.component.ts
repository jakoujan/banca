import { Component, ViewChild, inject, TemplateRef } from '@angular/core';
import { IAccount, ICustomer } from '../entities/interfaces';
import { LocalStorageService } from 'ngx-webstorage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvestModalComponent } from '../ui/invest-modal/invest-modal.component';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {
  customer: ICustomer = this.storage.retrieve('customer');
  selectedAccount: IAccount | null = null;

  constructor(private storage: LocalStorageService, private modalService: NgbModal){}


  abrirInvestModal(){
    const modalRef = this.modalService.open(InvestModalComponent);
    modalRef.componentInstance.customer = this.customer;
  }

}
