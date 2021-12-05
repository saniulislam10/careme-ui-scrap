import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductBySearch } from 'src/app/interfaces/product-by-search';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orders : ProductBySearch;
  orderId : string;

  constructor(
    private searchService: SearchService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.orderId = param.get('id');
      this.getOrderList(this.orderId);
    });
  }
  getOrderList(id){
    console.log("Order Details");
    this.searchService.getOrderById(id)
    .subscribe(res=>{
      this.orders=res.data;
      console.log(this.orders);
    })
  }

}
