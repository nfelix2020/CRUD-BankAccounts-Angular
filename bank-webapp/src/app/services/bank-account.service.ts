import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankAccount } from '../BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

private apiUrl="http://localhost:8080/api/bankaccounts"

  constructor(private http: HttpClient) { }

  // getAllBankAccounts(): Promise<BankAccount[]> {
  //   return this.http.get(`${environment.urlBackEnd}/bankaccounts`, {withCredentials:true})
  //     .toPromise()
  //     .then((response) =>
  //     response as BankAccount[]
  //     );
  // }

  //get bank account by Id
  
  getAllBankAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.apiUrl}`);
  }

  // public getBankAccountById(id:number){
  //   return this.http.get(`${environment.urlBackEnd}/bankaccounts/${id}`, {withCredentials:true})
  // }

  public getBankAccountById(id:number) : Observable<BankAccount>{
    return this.http.get<BankAccount>(`${this.apiUrl}/${id}`);
  }
  //Creating a Bank account

  // createNewBankAccount(bankAccount: BankAccount){
  //   return this.http.post(`${environment.urlBackEnd}/bankaccounts`, bankAccount, {withCredentials:true})
  // }

  
  createNewBankAccount(bankAccount: BankAccount): Observable<Object>{
    return this.http.post(`${this.apiUrl}`, bankAccount);
  }

  //Edit  bank account
  
  // public EditBankAccount(bankAccount: BankAccount){
  //   return this.http.put(`${environment.urlBackEnd}/bankaccounts/${bankAccount.id}`, bankAccount, {withCredentials:true})
  // }

  // Edit  bank account
  public EditBankAccount(id: number, bankAccount: BankAccount) : Observable<Object>{
    return this.http.put<BankAccount>(`${this.apiUrl}/${id}`, bankAccount);
  }


  //Removing a Bank account
  

    // public deleteBankAccount(id:number){
    //   return this.http.delete(`${environment.urlBackEnd}/bankaccounts/${id}`, {withCredentials:true})
    // }

    public deleteBankAccount(id:number): Observable<Object>{
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
