import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService : CategoryService) { }
  // Boş bir product nesnesi 
  model: Product = new Product()
  // Kategorileri oluşturup onu bir array de tanımladık
  categories!: Category[]
  // Onu da ngOnInıt ile doldurduk
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

}
