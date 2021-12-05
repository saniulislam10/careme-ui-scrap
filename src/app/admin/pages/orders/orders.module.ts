import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {FlexModule} from '@angular/flex-layout';
import {MaterialModule} from '../../../material/material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxSpinnerModule} from 'ngx-spinner';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';
import {PipesModule} from '../../../shared/pipes/pipes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderDetailsComponent } from '../order-details/order-details.component';


@NgModule({
  declarations: [
    OrdersComponent,
    UpdateOrderStatusComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FlexModule,
    MaterialModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OrdersModule { }
