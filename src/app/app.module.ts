import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { PipesModule } from './pipes/pipes.module';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { MovementsComponent } from './movements/movements.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ForeignExchangeComponent } from './foreign-exchange/foreign-exchange.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountsListComponent,
    MovementsComponent,
    InvestmentsComponent,
    ForeignExchangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PipesModule,
    UiModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
