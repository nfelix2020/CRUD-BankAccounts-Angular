import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BankAccount } from '../BankAccount';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  bankaccounts =  [

      {

        id:1,
        ownerFullName: "Félix NSHIMIYIMANA",
        ownerEmail: "nfelix2020@yahoo.com",
        ownerPhone:"+33753675586",
        accountNumber: 4877856121254,
        bankName: "BNP Paribas",
        zipCode: 37200,
        country: "France",
        totalAmount :785200
      },
      // {

      //   id:2,
      //   ownerFullName: "Eric Peter",
      //   ownerEmail: "eric2030@gmail.com",
      //   ownerPhone:"+33753675586",
      //   accountNumber: 4877856121254,
      //   bankName: "BNP Paribas",
      //   zipCode: 37700,
      //   country: "Belgium",
      //   totalAmount :1257890
      // },


    ];

    return {bankaccounts};

}
}
