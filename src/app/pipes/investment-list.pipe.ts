import { Pipe, PipeTransform } from '@angular/core';
import { IInvest } from '../entities/interfaces';

@Pipe({
  name: 'investmentList'
})
export class InvestmentListPipe implements PipeTransform {

  transform(invest: IInvest): string {
    return 'hola';
  }

}
