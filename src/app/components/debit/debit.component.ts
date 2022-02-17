import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'bak-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.scss']
})
export class DebitComponent implements OnInit , OnDestroy{
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
    this.accountService.debit(this.forrm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response =>{
      this.balance = response.accountBalance;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
