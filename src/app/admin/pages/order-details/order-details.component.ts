import { Component, OnInit } from '@angular/core';
import { ProductBySearch } from 'src/app/interfaces/product-by-search';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orders : ProductBySearch;

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    console.log("Order Details");
    this.getOrderList();
  }
  getOrderList(){
    console.log("Order Details");
    this.searchService.getAllOrders()
    .subscribe(res=>{
      this.orders=res.data;
      console.log(this.orders);
    })
  }

}
