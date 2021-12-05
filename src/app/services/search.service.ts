import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductBySearch } from '../interfaces/product-by-search';


const API_SEARCH = environment.apiBaseLink + '/api/search/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  product: ProductBySearch;
  productType : string;
  link: String;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProductFromAliexpress(link) {
    console.log(link);
    return this.httpClient.post<{ data: any, success?: string }>(API_SEARCH + 'get-product-from-aliexpress', { link });
  }
  getProductFromAmazon(link) {
    console.log(link);
    return this.httpClient.post<{ data: ProductBySearch, success?: string }>(API_SEARCH + 'get-product-from-amazon', { link });
  }
  
  public postOrder(data: ProductBySearch){
    console.log("Product before post :", data);
    return this.httpClient.post<{ data: string, message?: string }>(API_SEARCH + 'post-order', data);
  }
  public getAllOrders(){
    return this.httpClient.get<{ data: ProductBySearch, message?: string }>(API_SEARCH + 'get-all-orders');
  }

  public getSearchProduct() {
    return this.product;
  }

  public setSearchProduct(product: ProductBySearch) {
    this.product = product;
  }

  public getSearchLink() {
    return this.link;
  }
  public setSearchLink(link: String) {
    this.link = link;
  }

  public getProductType() {
    return this.productType;
  }

  public setProductType(type: string) {
    this.productType = type;
  }


}
