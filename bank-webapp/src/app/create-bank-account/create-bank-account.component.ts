import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankAccount } from '../BankAccount';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent implements OnInit {


  bankAccount: BankAccount= new BankAccount();


  constructor(
    private bankAccountService: BankAccountService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onSave(form: NgForm){
    console.log(form.value);

  //   this.bankAccount={

  // id:form.value.id,
  // ownerFullName: form.value.ownerFullName,
  // ownerEmail: form.value.ownerEmail,
  // ownerPhone:form.value.ownerPhone,
  // accountNumber: form.value.accountNumber,
  // bankName: form.value.bankName,
  // zipCode: form.value.zipCode,
  // country: form.value.country,
  // totalAmount:form.value.totalAmount

  //   };

  //   this.AddNewBankAccount(this.bankAccount);
  //   this.router.navigateByUrl('/bank-account-list')
  // }

  // AddNewBankAccount(bankAccount){
  //   this.bankAccountService.createNewBankAccount(bankAccount).subscribe((data)=>{
  //     console.log("Bank Account added", data)
  //   })

  this.AddNewBankAccount();
     }

     AddNewBankAccount(){
      this.bankAccountService.createNewBankAccount(this.bankAccount).subscribe(data=>{
        console.log("Bank Account added", data);
        this.goToBankAccountList();
      });
      }

      goToBankAccountList(){
        this.router.navigateByUrl('/bank-account-list')
    }
  }

