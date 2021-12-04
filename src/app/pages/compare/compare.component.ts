import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import {ProductService} from '../../services/product.service';
import {ReloadService} from '../../services/reload.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Cart} from '../../interfaces/cart';
import {CartService} from '../../services/cart.service';
import {UiService} from '../../services/ui.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  // compareList: Product[] = []
  compareList: string[] = [];
  compareListFromDB: Product[] = [];
  ids: any[] = [];

  // EMPTY CHECK
  isEmpty = true;

  constructor(
    private productService: ProductService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
    private cartService: CartService,
    private uiService: UiService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.reloadService.refreshCompareList$.subscribe(() => {
      this.getCompareList();
    });

    // GET DATA
    this.getCompareList();
  }

  getCompareList() {
    this.spinner.show();
    this.compareList = this.productService.getCompareList();
    if (this.compareList && this.compareList.length > 0) {
      this.getCompareListFromDB();
    } else {
      this.spinner.hide();
      this.isEmpty = true;
    }
  }

  /**
   * HTTP REQ
   */
  getCompareListFromDB() {
    this.productService.getSpecificProductsById(this.compareList, 'productName productSlug  price discountType discountAmount quantity images shortDescription')
      .subscribe( res => {
        this.spinner.hide();
        this.compareListFromDB = res.data;
        this.isEmpty = false;
      }, error => {
        this.spinner.hide();
        this.isEmpty = true;
        console.log(error);
      });
  }

  addItemToCartDB(data: Cart) {
    this.cartService.addItemToUserCart(data)
      .subscribe(res => {
        console.log(res);
        this.uiService.success(res.message);
        this.reloadService.needRefreshCart$();
      }, error => {
        console.log(error);
      });
  }


  removeItem(id: string) {
    this.productService.deleteCompareItem(id);
    this.reloadService.needRefreshCompareList$();
  }

  /**
   * ADD to CART
   */

  addToCart(productId: string) {
    // event.stopPropagation();

    const data: Cart = {
      product: productId,
      selectedQty: 1,
    };


    if (this.userService.getUserStatus()) {
      this.addItemToCartDB(data);
    } else {
      this.cartService.addCartItemToLocalStorage(data);
      this.reloadService.needRefreshCart$();
    }
  }



}
