import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'bak-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject();

  private readonly ACCOUNT_NUMBER = 'AAAA';

  public balance: number = 0;

  forrm : FormGroup = this.fb.group({
    amount: [''],
    accountNumber: [{value: this.ACCOUNT_NUMBER, disabled: true}]
  });

  constructor(private accountService: AccountService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  credit() {
    this.accountService.credit(this.forrm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(account =>{
      this.balance = account.balance;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
