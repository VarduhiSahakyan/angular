import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productUrl = "api/products/products.json";

  constructor(private http: HttpClient){}

  getProducts(): Observable<IProduct[]>{
    // the service receives the http response from request
    // the response data is mapped to an array of products.
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // exception handling
      // the response is piped through any operators and the observable emits
      // that map data to any subscribers. our subscriber receives the emitted
      // data and assigns our product property to the emitted array of products
      tap(data => console.log("All", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

      private handleError(err: HttpErrorResponse){
    // in real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to console
        let errormessage = '';
        if(err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. handle it accordingly.
          errormessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong
          errormessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errormessage);
        return throwError(errormessage);
    }

}
