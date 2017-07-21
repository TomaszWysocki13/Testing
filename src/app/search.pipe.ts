import { Pipe, PipeTransform } from '@angular/core';
import * as fuzzy from 'fuzzy';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, name: string): any {
    if (!value) {
      return [];
    }
    if (!name) {
      return value;
    }

    // return value.filter( p => p.name.toLowerCase().startsWith(name.toLowerCase()))
    return fuzzy.filter(name, value, {extract: (el: any)  => el.name}).map(el => el.original);
  }
}
