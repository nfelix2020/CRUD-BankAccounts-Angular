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
}
