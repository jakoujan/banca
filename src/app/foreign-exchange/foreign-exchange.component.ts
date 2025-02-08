import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { FastForexService } from '../services/fast-forex.service';
import { ComprarMonedaModalComponent } from '../ui/comprar-moneda-modal/comprar-moneda-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICustomer } from '../entities/interfaces';

@Component({
  selector: 'app-foreign-exchange',
  templateUrl: './foreign-exchange.component.html',
  styleUrls: ['./foreign-exchange.component.scss']
})

export class ForeignExchangeComponent implements OnInit {
  currencies: any[] = [];
  fromCurrency: any; 
  toCurrency: any;
  results?: any[]=[];
  customer: ICustomer = this.storage.retrieve('customer');

  constructor(private FastForexService: FastForexService, private storage: LocalStorageService, private modalService: NgbModal){}


  ngOnInit(){
    this.currencies = this.storage.retrieve('currencies');
    if(!this.currencies){
      this.FastForexService.getCurrencies().subscribe((data: any) => {
        let fields = Object.entries(data.currencies);
        this.currencies = fields.map(([key, value]) => ({
          code: key,
          name: value
        }));
        this.storage.store('currencies', this.currencies);
      });
    }
  }


  calculate(){
    console.log(this.fromCurrency, this.toCurrency);
    this.FastForexService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe((data: any) => {
      Object.entries(data.result).map(([key, value]) => {
        this.results?.push({
          currency: key,
          amount: value
        });
      });
      return this.results;
    });
  }

  AbrirCompraMoneda(){
    const modalRef = this.modalService.open(ComprarMonedaModalComponent);
    modalRef.componentInstance.customer = this.customer;
  }


}
