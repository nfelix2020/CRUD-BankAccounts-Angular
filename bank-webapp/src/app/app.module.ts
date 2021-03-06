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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EditBankAccountComponent } from './edit-bank-account/edit-bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBankAccountComponent,
    BankAccountListComponent,
    BankAccountDetailsComponent,
    EditBankAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
