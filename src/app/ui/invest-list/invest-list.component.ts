import { Component, Input} from '@angular/core';
import { IInvest } from 'src/app/entities/interfaces';

@Component({
  selector: 'app-invest-list',
  templateUrl: './invest-list.component.html',
  styleUrls: ['./invest-list.component.scss']
})
export class InvestListComponent {
  @Input('invest')
  invest?: IInvest[];

}
