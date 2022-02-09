import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccount } from '../BankAccount';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-edit-bank-account',
  templateUrl: './edit-bank-account.component.html',
  styleUrls: ['./edit-bank-account.component.css']
})
export class EditBankAccountComponent implements OnInit {

  bankAccount: BankAccount= new BankAccount();
  bankId:number;

  constructor(private route: ActivatedRoute, 
    private bankAccountService: BankAccountService,
    private router: Router) { }

  ngOnInit(): void {

    this.bankId=parseInt(this.route.snapshot.params['id']);
    console.log(this.bankId);
    this.bankAccountService.getBankAccountById(this.bankId).subscribe(data=>{
      console.log(data);
      this.bankAccount=data; //Recupérer les anciennes données
    })

  }

  onSave(form: NgForm){
    console.log(form.value);

    // let bankAccount: BankAccount={
    //   id:this.bankId,
    //   ownerFullName: form.value.ownerFullName,
    //   ownerEmail: form.value.ownerEmail,
    //   ownerPhone:form.value.ownerPhone,
    //   accountNumber: form.value.accountNumber,
    //   bankName: form.value.bankName,
    //   zipCode: form.value.zipCode,
    //   country: form.value.country,
    //   totalAmount:form.value.totalAmount
    // }

    this.updateBankAccount();

  }


  updateBankAccount(){
    this.bankAccountService.EditBankAccount(this.bankId, this.bankAccount).subscribe(data=>{
      console.log("the bank account is edited", data);
      this.goToBankAccountList();
    })
  }

  goToBankAccountList(){
    this.router.navigateByUrl('/bank-account-list')
}
}
