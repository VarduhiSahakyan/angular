import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls:["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy{

  pageTitle: string = 'Product List';
  imageWidth = 5;
  imageMargin = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  private _listFilter: string = '';
  sub!: Subscription;

  get listFilter(): string {
    return  this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter =  value;
    console.log("In setter" , value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService){}

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // 1. angular first initialize the component and executes the ngOnInit()
  ngOnInit(): void {
    // 2. call the getProduct() of the productService 3. it returns an observable
    // of IProduct[] 4. subscribe to that observable and the http get request is submitted
    // this is the asynchronous operation
    this.sub =
    this.productService.getProducts().subscribe({
      next: products => {this.products = products;
        // 5. setting filteredProducts
        this.filteredProducts = this.products;},
      error: err => this.errorMessage = err
    });
    this._listFilter = "";
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message
  }

}
