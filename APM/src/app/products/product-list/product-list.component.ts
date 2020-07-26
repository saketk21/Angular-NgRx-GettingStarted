import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import * as fromProduct from '../state/product.reducer';
import { Store, select } from '@ngrx/store';
import { ProductActionTypes, ToggleProductCode } from '../state/product.actions';
import { getShowProductCode } from '../state/product.selectors';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  showProductCode$ = this.store.pipe(select(getShowProductCode));

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private productService: ProductService, private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(): void {
    this.store.dispatch(new ToggleProductCode());
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

}
