import { Injectable } from '@angular/core';
import { last, Observable } from 'rxjs';
import { TranscationType } from '../entities/enums';
import { IAccount, ITransaction } from '../entities/interfaces';
import { ICustomer } from '../entities/interfaces';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {
  constructor(private storage: LocalStorageService) { }

  public invertir(customer: ICustomer ,account: IAccount, amount: number): Observable<IAccount> {
    return new Observable(observer => {
      console.log('hola')
      if(account.balance >= amount){
        account.balance -= amount;
      }else{
        observer.error('Insufficient funds');
      }
      const idtran = Math.random().toString(36).substring(2, 9);
      const transacion = {
        transactionId: idtran,
        accountId: account.accountId,
        amount: amount,
        transactionDate: new Date(),
        transactionType: TranscationType.INVEST
      };
      account.transactions.push(transacion);
      console.log(account)
      customer.investments.push({
        investmentId: Math.random().toString(36).substring(2,9),
        balance: amount,
        investRate: 1,
        transactions: [transacion]
      })

      console.log(customer)
      observer.next(account);
      observer.complete();
    });
  }

  public addTransaction(account: IAccount, amount: number, transactionType: TranscationType): Observable<IAccount> {
    return new Observable(observer => {
      if (transactionType === TranscationType.DEPOSIT) {
        account.balance += amount;
      } else if (transactionType === TranscationType.WITHDRAW) {
        if (account.balance >= amount) {
          account.balance -= amount;
        } else {
          observer.error('Insufficient funds');
          return;
        }
      } else if (transactionType === TranscationType.TRANSFER) {
        if (account.balance >= amount) {
          account.balance -= amount;
        } else {
          observer.error('Insufficient funds');
          return;
        }
      }
      account.transactions.push({
        transactionId: Math.random().toString(36).substring(2, 9),
        accountId: account.accountId,
        amount: amount,
        transactionDate: new Date(),
        transactionType: transactionType
      });
      observer.next(account);
      observer.complete();
    });
  }
}
