import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankAccount } from '../BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private baseURL="http://localhost:8080/bankaccounts"

  constructor(private http: HttpClient) { }

  // getAllBankAccounts(): Promise<BankAccount[]> {
  //   return this.http.get(`${environment.urlBackEnd}`, {withCredentials:true})
  //     .toPromise()
  //     .then((response) =>
  //     response as BankAccount[]
  //     );
  // }

  getAllBankAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.baseURL}`);
  }


  //get bank account by Id

  public getBankAccountById(id:number) : Observable<BankAccount>{
    return this.http.get<BankAccount>(`${this.baseURL}/${id}`);
  }

  //Creating a Bank account

  // createNewBankAccount(bankAccount: BankAccount){
  //   return this.http.post(`${environment.urlBackEnd}/bankaccounts`, bankAccount, {withCredentials:true})
  // }

  createNewBankAccount(bankAccount: BankAccount): Observable<Object>{
    return this.http.post(`${this.baseURL}`, bankAccount);
  }


  // Edit  bank account
  public EditBankAccount(id: number, bankAccount: BankAccount) : Observable<Object>{
    return this.http.put<BankAccount>(`${this.baseURL}/${id}`, bankAccount);
  }

  //Removing a Bank account

    // public deleteBankAccount(id:number){
    //   // return this.http.delete(`${environment.urlBackEnd}/bankaccounts/${id}`, {withCredentials:true})
    // }

    public deleteBankAccount(bankAccountId: number) : Observable<Object>{
       return this.http.delete(`${this.baseURL}/${bankAccountId}`);
    }
}
