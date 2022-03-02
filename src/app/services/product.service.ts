import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products"

  getProducts(categoryId: Product): Observable<Product[]> {
    let newPath = this.path
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }
    return this.http
      .get<Product[]>(newPath).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      )


  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata'
    }

    return throwError(errorMessage)
  }
}
