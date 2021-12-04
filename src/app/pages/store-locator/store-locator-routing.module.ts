import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreLocatorComponent} from './store-locator.component';

const routes: Routes = [
  {path: '', component: StoreLocatorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreLocatorRoutingModule { }
