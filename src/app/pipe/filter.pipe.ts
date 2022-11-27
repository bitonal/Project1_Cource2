import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/goods.interface';

@Pipe({
  name: 'filterProduct'
})
export class FilterPipe implements PipeTransform {

  transform(products1 : Product[], filterText: string) {
   if( products1.length ===0 || filterText ===''){
    return  products1;
   }
   else{
    return  products1.filter((product2)=>    {
      return  product2.name?.toLocaleLowerCase() ===filterText.toLocaleLowerCase()
    })
   }
  }
}
