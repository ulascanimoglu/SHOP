import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product'
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }
    filterText = filterText.toLocaleLowerCase();
    return value.filter(p => {
      return p.name!.toLocaleLowerCase().includes(filterText);
    });
  }
}
