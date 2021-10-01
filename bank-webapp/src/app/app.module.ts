import { InMemoryDataService } from './services/in-memory-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateBankAccountComponent,
    BankAccountListComponent,
    BankAccountDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
