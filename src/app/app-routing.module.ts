import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditComponent} from "./components/credit/credit.component";
import {DebitComponent} from "./components/debit/debit.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'history'
  },
  {
    path: 'credit',
    component: CreditComponent
  },
  {
    path: 'debit',
    component: DebitComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: '**',
    redirectTo: 'history'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
