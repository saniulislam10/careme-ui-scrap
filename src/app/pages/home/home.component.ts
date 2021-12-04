import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { MenuService } from '../../services/menu.service';
import { ShopService } from '../../services/shop.service';
import { ProductCategory } from '../../interfaces/product-category';
import { CategoryService } from '../../services/category.service';
import { DealOnPlay } from '../../interfaces/deal-on-play';
import { FeaturedCategory } from '../../interfaces/featured-category';
import { DealOnPlayService } from '../../services/deal-on-play.service';
import { FeaturedCategoryService } from '../../services/featured-category.service';
import { FeaturedProduct } from '../../interfaces/featured-product';
import { FeaturedProductService } from '../../services/featured-product.service';
import { Select } from '../../interfaces/select';
import { CustomizationService } from '../../services/customization.service';
import { Carousel } from '../../interfaces/carousel';
import { DealsOfTheDay } from '../../interfaces/deals-of-the-day';
import { DealsOfTheDayService } from '../../services/deals-of-the-day.service';
import { ProductBrand } from '../../interfaces/product-brand';
import { BrandService } from '../../services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { Banner } from '../../interfaces/banner';
import { BannerService } from '../../services/banner.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { Pagination } from '../../interfaces/pagination';
import { FacebookService, InitParams } from 'ngx-facebook';
import { SearchService } from 'src/app/services/search.service';
import { ProductBySearch } from 'src/app/interfaces/product-by-search';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  carousels: Carousel[] = [
    { url: '/', image: null, title: '', _id: '' }
  ];

  offers: any[] = [];

  // search
  public dataForm: FormGroup;
  url: any;
  amazonProduct: ProductBySearch;


  brandList: any[] = [];
  electronics: any[] = [];

  banner: Banner;


  // Store Data
  categories: ProductCategory[] = [];
  dealOnPlay: DealOnPlay[] = [];
  allDealsOfTheDay: DealsOfTheDay[] = [];
  brands: ProductBrand[] = [];
  featuredCategory: FeaturedCategory[] = [];
  allFeaturedProduct: FeaturedProduct[] = [];
  activeFeaturedProduct: string;

  // Dummy Data
  featureProductTypes: Select[] = [
    {
      value: 'featured',
      viewValue: 'Featured',
    },
    {
      value: 'best-seller',
      viewValue: 'Best Seller',
    },
    {
      value: 'special-product',
      viewValue: 'Special Product',
    },
  ];


  constructor(
    private menuService: MenuService,
    private shopService: ShopService,
    private categoryService: CategoryService,
    private dealOnPlayService: DealOnPlayService,
    private dealsOfTheDayService: DealsOfTheDayService,
    private featuredCategoryService: FeaturedCategoryService,
    private featuredProductService: FeaturedProductService,
    private customizationService: CustomizationService,
    private brandService: BrandService,
    private productService: ProductService,
    private storageService: StorageService,
    private bannerService: BannerService,
    private title: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    private facebookService: FacebookService,
    private searchService: SearchService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.updateMetaData();
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      url: [null, Validators.required],
      selectedSite: ['Amazon', Validators.required]

    });
    // GET DATA
    // this.getAllCarousel();
    // this.getAllCategory();
    // this.getAllDealsOfTheDay();
    // this.getAllDealOnPLay();
    // this.getAllFeaturedCategory();
    // this.getAllBrands();
    // this.activeFeaturedProduct = this.featureProductTypes[0].value;
    // this.getAllFeaturedProduct(this.featureProductTypes[0].value);
    // this.getAllBanner();
    // this.getRecommendedProducts();
    // Init Facebook Service
    // this.initFacebookService();
  }


  /**
   * HTTP REQ HANDLE
   */

  private getAllBanner() {
    const p: Pagination = {
      currentPage: '1',
      pageSize: '1'
    };

    const select = 'name image routerLink -_id';

    this.bannerService.getAllBanner(p, 'bigBanner', select)
      .subscribe(res => {
        this.banner = res.data ? res.data[0] : null;
      }, error => {
        console.log(error);
      });
  }

  private getAllCarousel() {
    const select = 'image url -_id';
    this.customizationService.getAllCarouselNoRepeat(select)
      .subscribe(res => {
        this.carousels = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllCategory() {
    const select = 'categoryName categorySlug image priority -_id';
    this.categoryService.getAllCategoryNoRepeat(select)
      .subscribe(res => {
        this.categories = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllDealsOfTheDay() {
    this.dealsOfTheDayService.getAllDealsOfTheDayNoRepeat()
      .subscribe(res => {
        this.allDealsOfTheDay = res.data;
      }, error => {
        console.log(error);
      });
  }


  private getAllDealOnPLay() {
    this.dealOnPlayService.getAllDealOnPlayNoRepeat()
      .subscribe(res => {
        this.dealOnPlay = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllFeaturedCategory() {
    this.featuredCategoryService.getAllFeaturedCategoryNoRepeat()
      .subscribe(res => {
        this.featuredCategory = res.data;
      }, error => {
        console.log(error);
      });
  }

  public getAllFeaturedProduct(type: string) {
    this.activeFeaturedProduct = type;
    this.featuredProductService.getAllFeaturedProductNoRepeat(type)
      .subscribe(res => {
        this.allFeaturedProduct = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllBrands() {
    this.brandService.getAllBrandsNoRepeat()
      .subscribe(res => {
        this.brands = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getRecommendedProducts() {
    this.productService.getRecommendedProducts(this.storageService.getViewedProductData())
      .subscribe(res => {
        this.products = res.data;
      }, err => {
        console.log(err);
      });
  }


  /**
   * SEO TITLE
   * SEO META TAGS
   */

  private updateMetaData() {
    // Title
    this.title.setTitle('Fortune Tech - Home');
    // Meta
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'description', content: 'Fortune Tech is the sole authorized distributor of SHARP and GENERAL in Bangladesh. Shop online and enjoy massive discounts and free home delivery.' });
    this.meta.updateTag({ name: 'keywords', content: 'online shop, esquire, esquireelectronics, esquireelectronicsltd, esquireelectronicsltd.com' });
    // Facebook
    this.meta.updateTag({ name: 'og:title', content: 'Fortune Tech - Home' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:url', content: 'https://esquireelectronicsltd.com/' });
    this.meta.updateTag({ name: 'og:image', content: 'https://esquireelectronicsltd.com/assets/brand/esquire.png' });
    this.meta.updateTag({ name: 'og:description', content: 'Fortune Tech is the sole authorized distributor of SHARP and GENERAL in Bangladesh. Shop online and enjoy massive discounts and free home delivery.' });
    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'Fortune Tech - Home' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://esquireelectronicsltd.com/assets/brand/esquire.png' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Fortune Tech is the sole authorized distributor of SHARP and GENERAL in Bangladesh. Shop online and enjoy massive discounts and free home delivery.' });

    // Canonical
    this.canonicalService.setCanonicalURL();

  }

  /**
   * INIT FACEBOOK
   */
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v11.0' };
    this.facebookService.init(initParams);
  }

  async onSearch() {
    this.spinner.show();
    let search = {
      url: this.dataForm.value.url,
      selectedSite: this.dataForm.value.selectedSite,
    }
    const link = search.url;
    console.log(search);
    if (search.selectedSite === 'Amazon') {
      this.searchService.setProductType(search.selectedSite);
      await this.getAmazonProduct(link);
    }
    
    else if (search.selectedSite === 'Aliexpress') {
      this.searchService.setProductType(search.selectedSite);
      await this.getAliexpressProduct(link);
    }
  }
  
  getAmazonProduct(link) {
    
    this.searchService.getProductFromAmazon(link)
    .subscribe(res => {
      this.amazonProduct = res.data;
      console.log(this.amazonProduct);
      this.searchService.setSearchLink(link);
      this.searchService.setSearchProduct(this.amazonProduct);
      this.router.navigateByUrl('/product-details-search');
      this.spinner.hide();
    })
  }
  getAliexpressProduct(link) {
    
    this.searchService.getProductFromAliexpress(link)
    .subscribe(res => {
      this.amazonProduct = res.data;
      console.log(this.amazonProduct);
      this.searchService.setSearchLink(link);
      this.searchService.setSearchProduct(this.amazonProduct);
      this.router.navigateByUrl('/product-details-search');
      this.spinner.hide();
      })
  }

}
