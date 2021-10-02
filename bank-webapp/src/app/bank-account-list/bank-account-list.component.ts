import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BankAccount } from '../BankAccount';
import { BankAccountService } from '../services/bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {

  bankAccountlist: BankAccount[]=[];

  closeResult: string;

  constructor(
    private bankAccountService: BankAccountService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.showAllBankAccounts();
  }

  showAllBankAccounts(){
    this.bankAccountService.getAllBankAccounts()
    .then((data: BankAccount[])=>{
      this.bankAccountlist=data;

    });
  }

  //Remove bank accountNumber

  public removeBankAccount(bankAccountId: number){
    this.bankAccountService.deleteBankAccount(bankAccountId).subscribe((bankAcc)=>{
      console.log("Bank Account removed", bankAcc);
      this.router.navigateByUrl('/bank-account-list')
    });
    this.showAllBankAccounts();
  }


  //POP-UP
  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
      this.router.navigateByUrl('/addresses');
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       this.router.navigateByUrl('/addresses');
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }

  }

}
