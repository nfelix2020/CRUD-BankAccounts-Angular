import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';
import { EditBankAccountComponent } from './edit-bank-account/edit-bank-account.component';

const routes: Routes = [
  {path:'', component: BankAccountListComponent},
  {path:"bank-account-list", component: BankAccountListComponent},
  {path:"bank-account/new", component: CreateBankAccountComponent},
  {path:"bank-account/edit/:id", component: EditBankAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
