import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DealerInfoComponent} from './dealer-info.component';
import {AddDealerInfoComponent} from './add-dealer-info/add-dealer-info.component';

const routes: Routes = [
  {path: '', component: DealerInfoComponent},
  {path: 'add-dealer-info', component: AddDealerInfoComponent},
  {path: 'edit-dealer-info/:id', component: AddDealerInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerInfoRoutingModule { }
