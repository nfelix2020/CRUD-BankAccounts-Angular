import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../BankAccount';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {

  bankAccountlist: BankAccount[]=[];

  constructor(private bankAccountService: BankAccountService) { }

  ngOnInit(): void {
    this.showAllBankAccounts();
  }

  showAllBankAccounts(){
    this.bankAccountService.getAllBankAccounts()
    .then((data: BankAccount[])=>{
      this.bankAccountlist=data;
    })
  }
}
