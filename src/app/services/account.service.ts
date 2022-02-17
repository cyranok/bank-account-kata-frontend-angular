import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreditResponseModel} from "../models/credit-response.model";
import {DebitResponseModel} from "../models/debit-response.model";
import {AccountHistoryModel} from "../models/account-history.model";



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly backend = 'http://localhost:8080/accounts'
  constructor(private httpClient: HttpClient) { }


  credit(value: {accountNumber: string, amount: number}): Observable<CreditResponseModel> {
    return this.httpClient.post<CreditResponseModel>(`${this.backend}/${value.accountNumber}/credit`, {amount: value.amount});
  }

  debit(value: {accountNumber: string, amount: number}): Observable<DebitResponseModel> {
    return this.httpClient.post<DebitResponseModel>(`${this.backend}/${value.accountNumber}/debit`, {amount: value.amount});
  }

  history(accountNumber: string): Observable<AccountHistoryModel>{
    return this.httpClient.get<AccountHistoryModel>(`${this.backend}/${accountNumber}`)
  }
}
