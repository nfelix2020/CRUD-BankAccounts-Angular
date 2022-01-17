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

  bankAccountlist: BankAccount[];

  closeResult: string;

  constructor(
    private bankAccountService: BankAccountService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.showAllBankAccounts();
  }

  // showAllBankAccounts(){
  //   this.bankAccountService.getAllBankAccounts()
  //   .then((data: BankAccount[])=>{
  //     this.bankAccountlist=data;

  //   });
  // }

  showAllBankAccounts(){
    this.bankAccountService.getAllBankAccounts().subscribe(data =>{
      this.bankAccountlist=data;
    });
  }

  //Remove bank accountNumber

  public removeBankAccount(id: number){
    this.bankAccountService.deleteBankAccount(id).subscribe((bankAcc)=>{
      console.log("Bank Account removed", bankAcc);
      this.goToBankAccountList();
    });
      this.showAllBankAccounts();
  }
  goToBankAccountList(){
    this.router.navigateByUrl('/bank-account-list')
}

  //POP-UP
  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
      this.router.navigateByUrl('/bank-account-list');
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       this.router.navigateByUrl('/bank-account-list');
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
