import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { IAccount, ICustomer } from '../entities/interfaces';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent {

  customer: ICustomer = this.storage.retrieve('customer');

  constructor(private storage: LocalStorageService) { }


  showDetails(account: IAccount) {
    alert(`Account: ${account.accountName} Balance: ${account.balance}`);
  }
}
