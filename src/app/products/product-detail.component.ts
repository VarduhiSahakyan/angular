import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "./product";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  // the property is clearly undefined until the data is retrieved
  // then it's type will be IProduct
  product: IProduct | undefined;
// this component needs to read the rout parameter so it knows
  // which product's detail to display we can du it by ActivatedRoute
  // we set it as a dependency by defining it as a parameter to
  // the constructor and add the needed import
  constructor(private route: ActivatedRoute,
              //adding router as a dependency by parameter for navigate
              private router: Router) { }

  // recall that this method is executed when the component is initialized
  // so that's a good time to read the  parameter and set the
  // component properties based on that parameter
  // Since the parameter won't change while this component is
  // displayed using the snapshot approach
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    // hard code for example
    this.product={
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    };
  }

  // navigate back by code method
  onBack(): void{
    this.router.navigate(['/products']);
  }

}
