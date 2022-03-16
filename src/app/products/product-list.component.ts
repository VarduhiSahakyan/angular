import {Component} from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string ='Product List';
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 15 , 2022",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "asserts/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hummer",
      "productCode": "KDN-0073",
      "releaseDate": "May 5 , 2021",
      "description": "Curved claw steel hammer",
      "price": 9.99,
      "starRating": 4.8,
      "imageUrl": "asserts/images/hammer.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];

}
