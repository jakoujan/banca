import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccDetailModalComponent } from './acc-detail-modal/acc-detail-modal.component';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransactionModalComponent } from './transaction-modal/transaction-modal.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InvestModalComponent } from './invest-modal/invest-modal.component';
import { InvestListComponent } from './invest-list/invest-list.component';
import { ComprarMonedaModalComponent } from './comprar-moneda-modal/comprar-moneda-modal.component';



@NgModule({
  declarations: [
    AccountCardComponent,
    AccDetailModalComponent,
    TransaccionListComponent,
    TransactionModalComponent,
    InvestListComponent,
    InvestModalComponent,
    ComprarMonedaModalComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AccountCardComponent,
    TransaccionListComponent
  ]
})
export class UiModule { }
