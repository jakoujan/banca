import { TranscationType } from "./enums";

export interface ICustomer {
  name: string;
  lastName: string;
  customerId: string;
  email: string;
  accounts: IAccount[];
  investments: IInvest[];
}

export interface IAccount {
  accountId: string;
  customerId: string;
  accountName: string;
  balance: number;
  transactions: ITransaction[];
}

export interface ITransaction {
  transactionId: string;
  accountId: string;
  amount: number;
  transactionDate: Date;
  transactionType: TranscationType;
}

export interface IInvest {
  investmentId: string;
  balance: number;
  investRate: number;
  transactions: ITransaction[];
}


export interface monedas{
  currency: string;
  amount: any;
}