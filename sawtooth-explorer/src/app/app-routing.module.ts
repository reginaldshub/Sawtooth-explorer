import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchesComponent } from './batches/batches.component';
import { StateComponent } from './state/state.component';
import { BlocksComponent } from './blocks/blocks.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'batches', component: BatchesComponent },
  { path: 'state', component: StateComponent },
  { path: 'blocks', component: BlocksComponent },
  { path: 'transactions', component: TransactionsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
