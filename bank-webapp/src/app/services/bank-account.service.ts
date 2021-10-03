import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BankAccount } from '../BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  getAllBankAccounts(): Promise<BankAccount[]> {
    return this.http.get(`${environment.urlBackEnd}/bankaccounts`, {withCredentials:true})
      .toPromise()
      .then((response) =>
      response as BankAccount[]
      );
  }

  //get bank account by Id
  public getBankAccountById(id:number){
    return this.http.get(`${environment.urlBackEnd}/bankaccounts/${id}`, {withCredentials:true})
  }

  //Creating a Bank account

  createNewBankAccount(bankAccount: BankAccount){
    return this.http.post(`${environment.urlBackEnd}/bankaccounts`, bankAccount, {withCredentials:true})
  }

  //Edit  bank account
  public EditBankAccount(bankAccount: BankAccount){
    return this.http.put(`${environment.urlBackEnd}/bankaccounts/${bankAccount.id}`, bankAccount, {withCredentials:true})
  }

  //Removing a Bank account

    public deleteBankAccount(id:number){
      return this.http.delete(`${environment.urlBackEnd}/bankaccounts/${id}`, {withCredentials:true})
    }
}
