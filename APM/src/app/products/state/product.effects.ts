import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { ProductActionTypes, LoadProductsSuccess, LoadProductsFailure } from './product.actions';
import { switchMapTo, catchError, map } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductService) {}

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(ProductActionTypes.LoadProducts),
        switchMapTo(this.productService.getProducts().pipe(
            map((products: Product[]) => new LoadProductsSuccess(products)),
            catchError(err => of(new LoadProductsFailure(err)))
        ))
    );
}
