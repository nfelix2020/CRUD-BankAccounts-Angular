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

  //Creating a Bank account


  //Edit  bank account


  //Removing a Bank account

    public deleteBankAccount(id:number){
      return this.http.delete(`${environment.urlBackEnd}/bankaccounts/${id}`, {withCredentials:true})
    }



}
