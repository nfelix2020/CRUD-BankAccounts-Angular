import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';

const routes: Routes = [
  {path:'', component: BankAccountListComponent},
  {path:"bank-account-list", component: BankAccountListComponent},
  {path:"bank-account/add", component: CreateBankAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
