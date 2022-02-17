import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {AccountHistoryModel} from "../../models/account-history.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'bak-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit , OnDestroy{

  private destroy$: Subject<void> = new Subject();

  private readonly accountNumber = 'AAAA';

  public history : AccountHistoryModel = {
    accountNumber: 'AAAA',
    operations: []
  };

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.history(this.accountNumber)
      .pipe(takeUntil(this.destroy$))
      .subscribe(history=>{
      this.history.operations = history.operations;
    })
  }

  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete()
  }
}
